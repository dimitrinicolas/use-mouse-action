type InternEventLister<E> = (event: E) => void;

/**
 * Events listeners to add on React element
 */
export interface IProps {
  onClick: InternEventLister<MouseEvent>;
  onMouseDown?: InternEventLister<MouseEvent>;
  onMouseUp?: InternEventLister<MouseEvent>;
  onTouchStart?: InternEventLister<TouchEvent>;
  onTouchEnd?: InternEventLister<TouchEvent>;
}
