import { useState } from "react";

export const AddTodo = ({ handleAdd }) => {
  const [text, setText] = useState("");
  return (
    <div className="inputrow">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="enter yout todo"
      />
      <button
        className="addbtn"
        onClick={() => {
          handleAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};
