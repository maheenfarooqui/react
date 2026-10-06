import { createContext , useContext } from "react";

export const todoCOntext = createContext({
todos : [
    {
id: 1,
todo : "todo msg",
complteted : false,
    }
],
addTodo : (todo)=>{},
editTodo: (id,todo)=>{},
deleteTodo : (id)=>{},
toggleTodo:(id)=>{},
});


export const useTodo =()=>{
return useContext(todoCOntext)
}

export const  TodoProvider = todoCOntext.Provider