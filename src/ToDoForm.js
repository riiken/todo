import React, { useState } from 'react';
import { BsFillPenFill } from "react-icons/bs";
const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} required placeholder="Enter task..."/>
            &nbsp;&nbsp;<button className='enter'><BsFillPenFill/></button>
        </form>
    );
};

export default ToDoForm;