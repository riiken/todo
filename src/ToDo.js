import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        // console.log(e.currentTarget.id)
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike  " : "todo remv"} >
           {todo.task.toUpperCase()}
        </div>
    );
};

export default ToDo;