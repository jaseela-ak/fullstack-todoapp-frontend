import { useState, useEffect } from "react";
import Todo from "./components/Todo";
// import getAllToDo from './utils/handleApi';

import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/handleApi";

function App() {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  // const [toDoId, setToDoId] = useState("")

  const updateToDoLists= (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  // const TodoList=axios.get("http://localhost:8000")

  return (
    <div className="App">
      <div className="conatiner">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            place holder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
           <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
           
        </div>
        <div className="list">
          {toDo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateTodoLists = {() => updateToDoLists(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
