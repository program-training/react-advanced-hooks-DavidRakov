import useCount from "../hooks/CountClicks";

const CountHover = () => {
  const [hover, setHover] = useCount();

  return (
    <div
      style={{ background: "gray" }}
      onMouseOver={setHover}
      className="ex-but-hov-1"
    >
      Go to me to upload the number:
      <br />
      {hover}
    </div>
  );
};

export default CountHover;
