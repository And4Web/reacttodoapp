const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      console.log("a new task is added.");
      return state;
    }
    case "ADD_TASK_ERR": {
      console.log("an error occurred.");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
