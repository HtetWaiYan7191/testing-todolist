const storeLocalStorage = (storeDataTasks) => {
  localStorage.setItem('Tasks', JSON.stringify(storeDataTasks));
};

export default storeLocalStorage;