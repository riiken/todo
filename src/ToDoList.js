import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    
                    <li className='cards'>
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                    </li>
                    
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter} className='reset'>Reset</button>
        </div>
    );
};

export default ToDoList;