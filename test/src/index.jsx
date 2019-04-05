import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import useMouseAction, { useMouseDown, useMouseUp } from '../..';

const Test = () => {
  const [text1, setText1] = useState(0);
  const props1 = useMouseDown(() => setText1(c => c + 1));

  const [text2, setText2] = useState(0);
  const props2 = useMouseUp(() => setText2(c => c + 1));

  const [text3, setText3] = useState(0);
  const props3 = useMouseAction(() => setText3(c => c + 1));

  const [text4, setText4] = useState(0);
  const props4 = useMouseDown({ onAction: () => setText4(c => c + 1), touch: true });

  const [text5, setText5] = useState(0);
  const props5 = useMouseUp({ onAction: () => setText5(c => c + 1), touch: true });

  return (
    <>
      <button type="button" id="1" {...props1}>
        {text1}
      </button>
      <button type="button" id="2" {...props2}>
        {text2}
      </button>
      <button type="button" id="3" {...props3}>
        {text3}
      </button>
      <button type="button" id="4" {...props4}>
        {text4}
      </button>
      <button type="button" id="5" {...props5}>
        {text5}
      </button>
    </>
  );
};

ReactDOM.render(<Test />, document.getElementById('app'));
