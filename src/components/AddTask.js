import React , {useState , useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AddIcon from '@material-ui/icons/Add';
import {GlobalContext} from '../Context/GLobalState';

const AddTask = () => {
    
    const [open, setOpen] = useState(false);
    const [task , setTask] = useState("");
    const [category, setCategory] = useState("");

    const {addTask} = useContext(GlobalContext);
    
    const handleClickOpen = () => {
            setOpen(true);
        };

    const handleClose = (e) => {
          e.preventDefault();
            

            const newTask = {
                id: Math.floor(Math.random() * 10000),
                name: task,
                category      
            }

            addTask(newTask);
            setOpen(false);
       };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className = "addTask__btn">
        <AddIcon />  NEW TO-DO
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className = "addTask">
        <h3 className = "addTask__title">Add Task</h3>
        <DialogContent>
          <div className = "addTask__inputgrp">
          <input type = "text" placeholder = "Task Name " 
                className = "addTask__input" value = {task}
                onChange = {(e) => setTask(e.target.value)}
                />
            <input type = "text" placeholder = "Add category" 
                  className = "addTask__input" value = {category}
                  onChange = {(e) => setCategory(e.target.value)}
                  />
            </div>   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className = "addTask__btn">
            Cancel
          </Button>
          <Button onClick={handleClose} className = "addTask__btn">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddTask;
