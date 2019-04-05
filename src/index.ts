import { useCallback, useEffect, useState } from 'react';

import { HooksInput } from './types/options';
import { IProps } from './types/props';

const DEFAULT_OPTIONS = { down: false, up: false, touch: false, timeout: 10 };

/**
 * Test if a mouse event can trigger a click.
 * It test if mouse button used is the main one.
 * @returns {boolean} If mouse event can click.
 */
const isMouseEventClickable = ({ button }: MouseEvent): boolean => button === 0;

/**
 * Listen to both mousedown and click event and
 * trigger callback once.
 */
export const useMouseAction = (options: HooksInput): IProps => {
  if (typeof options === 'function') {
    return useMouseAction({ onAction: options });
  }

  const {
    onAction,
    down,
    up,
    touch,
    timeout,
    onClick,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd
  } = { ...DEFAULT_OPTIONS, ...options };

  if (typeof onAction !== 'function') {
    throw new Error('You must provide a callback function.');
  }

  /**
   * Boolean state when mouse is down on the element.
   */
  const [mouseDown, setMouseDown] = useState(false);

  /**
   * Function called when mouse up or touch end is
   * triggered in the whole document.
   *
   * It set mouseDown state to false after a short
   * time to prevent standards mouse up or click
   * events to call onAction.
   *
   */
  const onMouseDownEnd = () => {
    setTimeout(() => setMouseDown(false), timeout);
  };

  /**
   * Boolean state when mouse up or touch end was triggered
   * on the element set to true for a short time.
   */
  const [mouseUpTriggered, setMouseUpTriggered] = useState(false);

  /**
   * Function called when mouse up or touch end has
   * triggered element click action.
   *
   * It switch the mouseUpTriggered boolean to true
   * and set it to false after a short time.
   *
   */
  const onMouseUpTriggered = () => {
    setMouseUpTriggered(true);
    setTimeout(() => setMouseUpTriggered(false), timeout);
  };

  /**
   * Listen to mouse up event on the whole document
   * to set mouseDown to false.
   */
  useEffect(() => {
    if (down) {
      const handleDocumentMouseUp = (event: MouseEvent): void => {
        if (isMouseEventClickable(event)) {
          onMouseDownEnd();
        }
      };

      document.addEventListener('mouseup', handleDocumentMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleDocumentMouseUp);
      };
    }
    return () => {};
  }, []);

  /**
   * Listen to touch end event on the whole document
   * to set mouseDown to false.
   */
  useEffect(() => {
    if (down && touch) {
      const handleDocumentTouchEnd = () => onMouseDownEnd();

      document.addEventListener('touchend', handleDocumentTouchEnd);
      return () => {
        document.removeEventListener('touchend', handleDocumentTouchEnd);
      };
    }
    return () => {};
  }, []);

  /**
   * Indicates if onAction callback can be called
   * by an event.
   * @returns {boolean} canTriggerClick
   */
  const canTriggerClick = useCallback(() => {
    /**
     * Test if element must handle mouse down event
     * and the mouse is not down or touch is not
     * started on the element.
     */
    if (down && mouseDown) {
      return false;
    }

    /**
     * Test if element must handle mouse up event
     * and the action has not already been called
     * after a mouse up or touch end event.
     */
    if (up && mouseUpTriggered) {
      return false;
    }

    return true;
  }, [mouseDown, mouseUpTriggered]);

  /**
   * @namespace props - Events listeners that must be added to React element.
   */
  const props: IProps = {
    /**
     * Standard click event listener.
     */
    onClick: event => {
      if (typeof onClick === 'function') {
        onClick(event);
      }

      if (canTriggerClick()) {
        onAction(event);
      }
    }
  };

  /**
   * Mouse down event listener.
   */
  props.onMouseDown = event => {
    if (typeof onMouseDown === 'function') {
      onMouseDown(event);
    }

    if (down && canTriggerClick() && isMouseEventClickable(event)) {
      setMouseDown(true);
      onAction(event);
    }
  };

  /**
   * Touch start event listener.
   */
  props.onTouchStart = event => {
    if (typeof onTouchStart === 'function') {
      onTouchStart(event);
    }

    if (down && touch && canTriggerClick()) {
      setMouseDown(true);
      onAction(event);
    }
  };

  /**
   * Mouse up event listener.
   */
  props.onMouseUp = event => {
    if (typeof onMouseUp === 'function') {
      onMouseUp(event);
    }

    if (up && canTriggerClick() && isMouseEventClickable(event)) {
      onMouseUpTriggered();

      /**
       * Call click handler with a short timeout to
       * prevent next coming click event to be catched
       * by a newly rendered element above the button.
       */
      setTimeout(() => onAction(event), timeout);
    }
  };

  /**
   * Touch end event listener.
   */
  props.onTouchEnd = event => {
    if (typeof onTouchEnd === 'function') {
      onTouchEnd(event);
    }

    if (up && touch && canTriggerClick()) {
      onMouseUpTriggered();

      /**
       * Call click handler with a short timeout to
       * prevent next coming mouseup and click events
       * to be catched by a newly rendered element
       * above the button.
       */
      setTimeout(() => onAction(event), timeout);
    }
  };

  return props;
};

/**
 * Listen to both mousedown and click event and
 * trigger callback once.
 */
export const useMouseDown = (options: HooksInput): IProps => {
  if (typeof options === 'function') {
    return useMouseDown({ onAction: options });
  }

  return useMouseAction({ ...options, down: true });
};

/**
 * Listen to both mouseup and click event and
 * trigger callback once.
 */
export const useMouseUp = (options: HooksInput): IProps => {
  if (typeof options === 'function') {
    return useMouseUp({ onAction: options });
  }

  return useMouseAction({ ...options, up: true });
};

export default useMouseAction;
