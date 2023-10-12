import useCount from "../hooks/CountClicks";

const ClickCount = () => {
  const [green, setGreen] = useCount();
  const [blue, setBlue] = useCount();

  return (
    <>
      <h1>custom hooks exercise</h1>
      <div style={{ display: "flex" }}>
        <button
          style={{ background: "blue" }}
          onClick={setBlue}
          className="ex-but-hov-1"
        >
          Click me to upload the number:
          <br />
          {String(blue)}
        </button>
        <button
          style={{ background: "green" }}
          onClick={setGreen}
          className="ex-but-hov-1"
        >
          Click me to upload the number:
          <br />
          {String(green)}
        </button>
      </div>
    </>
  );
};

export default ClickCount;
