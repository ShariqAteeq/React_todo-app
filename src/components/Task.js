import React, { useState } from 'react';
import AddTask from "./AddTask";
import AddIcon from '@material-ui/icons/Add';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Button from '@material-ui/core/Button';

function Task() {

    

    return (
        <div className = "task">
            <ul className = "task__list">
                <li className = "task__item">
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
                </li>
            </ul>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen} className = "addTask__btn">
                 <AddIcon />  NEW TO-DO
            </Button> */}
            <AddTask />
        </div>
    )
}

export default Task
