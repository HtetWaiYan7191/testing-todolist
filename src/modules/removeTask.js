const removeTask = (tasks, index) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  return updatedTasks;
};

export default removeTask;