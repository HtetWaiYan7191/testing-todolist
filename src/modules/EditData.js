import storeLocalStorage from './storeLocalStorage.js';

const edit = (storeTasks, description, index) => {
  storeTasks[index].description = description;
  storeLocalStorage(storeTasks);
};

export default edit;