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
    const [category, setCategory] = useState("Work");

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
            setTask("");
            setOpen(false);
       };

      const dialogClose = () => {
        setOpen(false);
      };

      //console.log(sel);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className = "addTask__btn">
        <AddIcon />  NEW TO-DO
      </Button>
      <Dialog open={open} onClose={dialogClose} className = "addTask">
        <h3 className = "addTask__title">Add Task</h3>
        <DialogContent>
          <div className = "addTask__inputgrp">
          <input type = "text" placeholder = "Task Name " required
                className = "addTask__input" value = {task}
                onChange = {(e) => setTask(e.target.value)}
                />
            <select value = {category} onChange = {e => setCategory(e.target.value)} className = "addTask__select">
                <option className = "addask__opt">Work</option>
                <option className = "addask__opt">Travel</option>
                <option className = "addask__opt">Groceries</option>
            </select>
            </div>   
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogClose} className = "addTask__btn">
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
