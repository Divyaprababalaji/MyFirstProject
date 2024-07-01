function Loginstatus({Currentstatus}) {
  return (
    <span
      className="pro"
      style={{ backgroundColor: Currentstatus?.Online ? "green" : "red" }}
    >
      {Currentstatus?.Online ? "ONLINE" : "OFFLINE"}
    </span>
  );
}
export default Loginstatus;
