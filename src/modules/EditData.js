const edit = (storeTasks, description, index) => {
  const updatedTasks = [...storeTasks];
  updatedTasks[index] = { ...updatedTasks[index], description };
  return updatedTasks;
};

export default edit;