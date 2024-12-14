import React from "react";

function ToDo(props) {
  // const { todo, id } = props.info;
  return (
    <div className="container mx-auto p-2 input h-16 w-4/5 items-center mt-10 mb-3 flex justify-between">
      <h1 className="items-center font-bold text-xl">salom</h1>
      <button className="btn btn-error">delete</button>
    </div>
  );
}

export default ToDo;