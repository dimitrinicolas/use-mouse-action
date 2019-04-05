/**
 * Action handler called when the element is clicked.
 */
type OnAction = (event: MouseEvent | TouchEvent) => any;

type PublicEventLister<E> = (event?: E) => any;

/**
 * React Hooks options.
 */
interface IOptions {
  /**
   * Action handler called when the element is clicked.
   */
  onAction: OnAction;

  /**
   * Handle mouse down action.
   * @default false
   */
  down?: boolean;

  /**
   * Handle mouse up action.
   * @default false
   */
  up?: boolean;

  /**
   * Handle touch event equivalent to mousedown and mouseup.
   * @default false
   */
  touch?: boolean;

  /**
   * Short time to prevent multiple events.
   * @default 10
   */
  timeout?: number;

  /**
   * Native click event handler passed into returned props.
   */
  onClick?: PublicEventLister<MouseEvent>;

  /**
   * Native mousedown event handler passed into returned props.
   */
  onMouseDown?: PublicEventLister<MouseEvent>;

  /**
   * Native mouseup event handler passed into returned props.
   */
  onMouseUp?: PublicEventLister<MouseEvent>;

  /**
   * Native touchstart event handler passed into returned props.
   */
  onTouchStart?: PublicEventLister<TouchEvent>;

  /**
   * Native touchend event handler passed into returned props.
   */
  onTouchEnd?: PublicEventLister<TouchEvent>;
}

export type HooksInput = IOptions | OnAction;
