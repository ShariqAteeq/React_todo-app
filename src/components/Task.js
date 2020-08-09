import React, { useContext } from 'react';
import AddTask from "./AddTask";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {GlobalContext} from '../Context/GLobalState';

function Task() {

    const { Tasks , delTask } = useContext(GlobalContext);

    return (
        <div className = "task">
            <ul className = "task__list">
                {Tasks.map(task => (
                    <li className = "task__item" key = {task.id}>
                    <div className = "task__item-todo">
                    <h3 className = "task__item-heading">{task.name}</h3>
                    <p className = "task__item-type">{task.category}</p>
                        </div>
                        <div className="task__item-delete">
                            <DeleteRoundedIcon onClick = {() => delTask(task.id)}/>
                        </div>
                    </li>
                ))}
            </ul>
            <AddTask />
        </div>
    )
}

export default Task;

    /* <li className = "task__item">
                <div className = "task__item-todo">
                        <h3 className = "task__item-heading">Renew Passport</h3>
                        <p className = "task__item-type">Europe Trip</p>
                    </div>
                    <div className="task__item-delete">
                        <DeleteRoundedIcon />
                    </div>
                </li>
                <li className = "task__item">
                    <div className = "task__item-todo">
                        <h3 className = "task__item-heading">Buy Travel Book</h3>
                        <p className = "task__item-type">Europe Trip</p>
                    </div>
                    <div className="task__item-delete">
                        <DeleteRoundedIcon />
                    </div>
                </li>
                <li className = "task__item">
                <div className = "task__item-todo">
                        <h3 className = "task__item-heading">pay backpack</h3>
                        <p className = "task__item-type">Europe Trip</p>
                    </div>
                    <div className="task__item-delete">
                        <DeleteRoundedIcon />
                    </div>
                </li>
                <li className = "task__item">
                <div className = "task__item-todo">
                        <h3 className = "task__item-heading">Tomatoes</h3>
                        <p className = "task__item-type">groceries</p>
                    </div>
                    <div className="task__item-delete">
                        <DeleteRoundedIcon />
                    </div>
                </li>
                <li className = "task__item">
                <div className = "task__item-todo">
                        <h3 className = "task__item-heading">curly pasta</h3>
                        <p className = "task__item-type">groceries</p>
                    </div>
                    <div className="task__item-delete">
                        <DeleteRoundedIcon />
                    </div>
                </li> */
