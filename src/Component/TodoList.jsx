import Todoitem from "./Todoitem";

export default function TodoList({ data, handletoggle, hanndleDelete }) {
  return (
    <>
      {data.map((el) => (
        <Todoitem
          title={el.title}
          key={el.id}
          status={el.status}
          id={el.id}
          handletoggle={handletoggle}
          hanndleDelete={hanndleDelete}
        />
      ))}
    </>
  );
}
