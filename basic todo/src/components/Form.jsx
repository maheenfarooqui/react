import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/index";

const Form = () => {
    const [todo, setTodos] = useState("");
    const {addTodo} = useTodo();

    const add = (e)=>{
        e.preventDefault()
if (!todo) return
addTodo({todo , complteted:false})
setTodos("")
    }


  return (
    <div>
      <form onSubmit={add} className="bg-cyan-400">
        <input type="text"
        placeholder="add todo" className="border-b border-black "
        value={todo}
        onChange={(e)=>setTodos(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default Form;
