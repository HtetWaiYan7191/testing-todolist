const addTask = (tasks, newTask) => {
  const updatedTasks = [...tasks];
  updatedTasks.push(newTask);
  return updatedTasks;
};

export default addTask;