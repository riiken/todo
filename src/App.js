import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDo from './ToDo';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      console.log(task.id)
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    copy.sort((a,b)=>{return b.id-a.id})
    // console.log(copy)
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header /><br></br><br></br>
      <ToDoForm addTask={addTask}/><br></br>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      
    </div>
  );
}

export default App;
