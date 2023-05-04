 import React from 'react'
 
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
 
 const Todo = ({text,updateTodoLists,deleteToDo}) => {
   return (
   <div className="todo">
    <div className="text">{text}</div>
    <div className="icons">
    <BiEdit className='icon' 
    onClick={updateTodoLists} 
    />
    <AiFillDelete className='icon' 
    onClick={deleteToDo} 
    />
    </div>
   </div>
   )
 }
 
 export default Todo