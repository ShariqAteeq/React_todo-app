import React , {createContext, useReducer} from 'react';
import TaskReducer from './TaskReducer';

const initialState = {
    Tasks : [
        {id : 1, name : "buy book" , category : "Travel"},
        {id : 2, name : "buy headphone" , category : "Travel"},
        {id : 3, name : "pasta" , category : "Groceries"},
        {id : 4, name : "design logo" , category : "Work"}
    ]
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(TaskReducer , initialState);

    function addTask(task) {
        dispatch({
            type: "Add__task",
            payload : task
        });
    }
    function delTask(id) {
        dispatch({
            type: "Del__task",
            payload : id
        });
    }

    return <GlobalContext.Provider value = {{
        Tasks : state.Tasks,
        addTask,
        delTask

    }}>
            {children}
    </GlobalContext.Provider>
}