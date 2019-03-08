export default `const DropDownItem = ({ children, handleClick }) => {
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
  );
};`;
