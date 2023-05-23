export default function RadioButton({ option, setOption }: OptionProps) {
  return (
    <div className="wrapper">
      <div className="option">
        <input
          className="input"
          type="radio"
          name="btn"
          value="mobile"
          checked={option === "mobile" ? true : false}
          onChange={() => setOption("mobile")}
        />
        <div className="btn">
          <span className="span">Mobile</span>
        </div>
      </div>
      <div className="option">
        <input
          className="input"
          type="radio"
          name="btn"
          value="tab"
          checked={option === "tab" ? true : false}
          onChange={() => setOption("tab")}
        />
        <div className="btn">
          <span className="span">Tab</span>
        </div>
      </div>
      <div className="option">
        <input
          className="input"
          type="radio"
          name="btn"
          value="pc"
          checked={option === "pc" ? true : false}
          onChange={() => setOption("pc")}
        />
        <div className="btn">
          <span className="span">PC</span>
        </div>
      </div>
    </div>
  );
}
