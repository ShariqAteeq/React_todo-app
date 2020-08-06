export default(state , action ) => {
    switch(action.type) {
        case "Add__task":
            return {
                ...state,
                Tasks : [action.payload , ...state.Tasks]
            }
        case "Del__task":
            return {
                ...state,
                Tasks : state.Tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}