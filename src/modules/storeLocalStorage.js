const storeLocalStorage = (storeTasks) => {
  localStorage.setItem('Tasks', JSON.stringify(storeTasks));
};

export default storeLocalStorage;