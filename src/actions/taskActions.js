const AddTask = (task) => {
  return (getState, { getFirebase }, dispatch) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("tasks")
      .add({
        ...task,
        date: new Date(),
      })
      .then(() => {
        dispatch({
          task,
          type: "ADD_TASK",
        }).catch((err) => {
          dispatch({
            err,
            type: "ADD_TASK_ERR",
          });
        });
      });
  };
};

export default AddTask;
