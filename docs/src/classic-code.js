export default `const DropDownItem = ({ children, ...rest }) => (
  <li>
    <button type="button" {...rest}>
      {children}
    </button>
  </li>
);

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button type="button" onClick={() => setOpen(state => !state)}>
        Open drop-down
      </button>
      <ul style={{ display: open ? 'block' : 'none' }}>
        <DropDownItem onClick={() => setOpen(false)}>Action #1</DropDownItem>
        <DropDownItem onClick={() => setOpen(false)}>Action #2</DropDownItem>
        <DropDownItem onClick={() => setOpen(false)}>Action #3</DropDownItem>
      </ul>
    </div>
  );
};`;
