import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

import { useMouseDown, useMouseUp } from '../..';

import libCode from './lib-code';
import classicCode from './classic-code';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const DropDownItem = ({ children, handleClick }) => {
  const props = useMouseUp(handleClick);

  return (
    <li>
      <button type="button" {...props}>
        {children}
      </button>
    </li>
  );
};

const DropDown = () => {
  const [open, setOpen] = useState(false);

  const props = useMouseDown(() => setOpen(state => !state));

  return (
    <>
      <div className="dropdown">
        <button type="button" {...props}>
          Open drop-down
        </button>
        <ul style={{ display: open ? 'block' : 'none' }}>
          <DropDownItem handleClick={() => setOpen(false)}>Action #1</DropDownItem>
          <DropDownItem handleClick={() => setOpen(false)}>Action #2</DropDownItem>
          <DropDownItem handleClick={() => setOpen(false)}>Action #3</DropDownItem>
        </ul>
      </div>
    </>
  );
};

const ClassicDropDownItem = ({ children, ...rest }) => (
  <li>
    <button type="button" {...rest}>
      {children}
    </button>
  </li>
);

const ClassicDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button type="button" onClick={() => setOpen(state => !state)}>
        Open drop-down
      </button>
      <ul style={{ display: open ? 'block' : 'none' }}>
        <ClassicDropDownItem onClick={() => setOpen(false)}>Action #1</ClassicDropDownItem>
        <ClassicDropDownItem onClick={() => setOpen(false)}>Action #2</ClassicDropDownItem>
        <ClassicDropDownItem onClick={() => setOpen(false)}>Action #3</ClassicDropDownItem>
      </ul>
    </div>
  );
};

ReactDOM.render(
  <>
    <main>
      <section>
        <h1>Classic drop-down</h1>

        <ClassicDropDown />

        <h2>Source Code</h2>

        <SyntaxHighlighter language="jsx" style={prism}>
          {classicCode}
        </SyntaxHighlighter>
      </section>
      <section>
        <h1>Faster usable drop-down</h1>

        <p>On desktop, you can simply keep mouse button down, drag down and release the button on the wanted item.</p>

        <DropDown />

        <h2>Source Code</h2>

        <SyntaxHighlighter language="jsx" style={prism}>
          {libCode}
        </SyntaxHighlighter>
      </section>
    </main>
  </>,
  document.getElementById('app')
);
