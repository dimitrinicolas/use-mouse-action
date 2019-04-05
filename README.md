# use-mouse-action [![Build Status][travis badge]][travis link]

React Hooks to listen to both mouse down or up and click events with a once called function.

## [Example](http://dimitrinicolas.github.io/use-mouse-action/example/)

This hook can be used to create fast usable drop-down buttons.

## Installation

```bash
npm install use-mouse-action
```

## Usage

```jsx
import useMouseAction from 'use-mouse-action';

const Component = () => {
  const props = useMouseAction({
    onAction: () => console.log('You clicked or mouse downed me!'),
    down: true
  });

  return (
    <button type="button" {...props}>
      Click me fast!
    </button>
  );
};
```

## Hooks

This library provides three React Hooks:

- `useMouseAction`
- `useMouseDown`
- `useMouseUp`

They all want the same parameter: either the callback function or an options
object with the callback function in the `onAction` parameter.

They all return an object of event listeners to add on the element.

```jsx
import { useMouseDown } from 'use-mouse-action';

/** ... */

const props = useMouseDown(() => toggle);
return (<button type="button" {...props}>Click me</button>);
```

The `useMouseDown` and `useMouseUp` are both a shortcut to respectively set the `down` and `up` option to `true`.

### Options

- `onAction` (required): The function called on custom click triggered.
- `down` (default: `false`): If the element should listen to mousedown event.
- `up` (default: `false`): If the element should listen to mouseup event.
- `touch` (default: `false`): If the element should listen to touch equivalent
events.
- `timeout` (default: `10`): Short timeout in milliseconds to prevents multiple
events.

You can provide functions that should listen to each event with theses options:

- `onClick`
- `onMouseDown`
- `onMouseUp`
- `onTouchStart`
- `onTouchEnd`

## Why

Sometimes, we would like to listen to `mousedown` or `mouseup` events on
buttons, but these events are difficult to call by disabled peoples or by
people that navigates with their keyboard.

We would like to listen both to `mousedown`/`mouseup` and `click` event, but we
now must to make sure that our action is triggered only once.

Moreover, we would add on top of that the listening of touch events.

That's why I created this React Hooks library.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## License

This project is licensed under the [MIT license](LICENSE).

[travis badge]: https://travis-ci.org/dimitrinicolas/use-mouse-action.svg?branch=master
[travis link]: https://travis-ci.org/dimitrinicolas/use-mouse-action
