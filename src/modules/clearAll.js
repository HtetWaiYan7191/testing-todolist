const clearAll = (storeTasks) => {
  storeTasks = storeTasks.filter((element) => !element.completed);
  return storeTasks;
};

export default clearAll;