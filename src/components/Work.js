import React, {useContext} from 'react';
import AddTask from "./AddTask";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {GlobalContext} from '../Context/GLobalState';

function Work() {
    const { Tasks , delTask } = useContext(GlobalContext);

    let tasks = ( 
        Tasks.map(task => (
            task.category === "Work" ?
            <li className = "task__item" key = {task.id}>
                <div className = "task__item-todo">
                <h3 className = "task__item-heading">{task.name}</h3>
                <p className = "task__item-type">{task.category}</p>
                 </div>
                    <div className="task__item-delete">
                        <DeleteRoundedIcon onClick = {() => delTask(task.id)}/>
                    </div>
             </li> : null
        ))
    );

    return (
        <div className = "task">
        <ul className = "task__list">
            {tasks}
        </ul>
        <AddTask />
    </div>
    )
}

export default Work;
