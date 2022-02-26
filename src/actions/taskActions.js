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
          type: "ADD_TASK",
          task,
        }).catch((err) => {
          dispatch({
            type: "ADD_TASK_ERR",
            err,
          });
        });
      });
  };
};

export default AddTask;
