import { RiDeleteBin5Fill } from "react-icons/ri";

export default function Todoitem({
  id,
  handletoggle,
  title,
  status,
  hanndleDelete
}) {
  const red = {
    color: "red"
  };
  const green = {
    color: "green"
  };
  const red1 = {
    color: "red"
  };
  const green1 = {
    color: "green",
    backgroundColor: "#C2B8A3"
  };
  return (
    <div className="flexrow" style={!status ? red1 : green1}>
      <div>{title}</div>
      <div>{!status ? "Not Done" : "Done"}</div>
      <div>
        <button className="toggle" onClick={() => handletoggle(id)}>
          Toggle
        </button>
      </div>
      <div>
        <button className="red" onClick={() => hanndleDelete(id)}>
          <RiDeleteBin5Fill />
        </button>
      </div>
    </div>
  );
}
