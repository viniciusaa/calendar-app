import "./styles.scss";

const ColorSelectionInput = ({ color, setSelectedColor, active }) => {
  const classes = `color-input ${active && "color-active"}`;

  return (
    <div
      className={classes}
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

export default ColorSelectionInput;
