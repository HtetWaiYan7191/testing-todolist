import './style.css';
import storeLocalStorage from './modules/storeLocalStorage.js';
import sortArr from './modules/sortArr.js';
import edit from './modules/EditData.js';
import clearAll from './modules/clearAll.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';
import loadTask from './modules/loadTask.js';

const taskContainer = document.querySelector('.tasks-container');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
let storeTasks = JSON.parse(localStorage.getItem('Tasks')) || [];

const showTask = () => {
  taskContainer.innerHTML = '';
  const taskListHTML = loadTask(storeTasks);
  taskContainer.innerHTML = taskListHTML;

  const remove = (item, index) => {
    item.addEventListener('click', () => {
      storeTasks = removeTask(storeTasks, index);
      storeLocalStorage(sortArr(storeTasks));
      showTask();
    });
  };

  const checkboxContainers = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
  const readOnlyAdd = (inputText) => {
    inputText.readOnly = true;
  };
  checkboxContainers.forEach((checkbox) => {
    let previousState = checkbox.checked;
    const toDoTask = checkbox.parentElement.firstElementChild.nextElementSibling;
    readOnlyAdd(toDoTask);
    checkbox.addEventListener('change', (e) => {
      const currentState = e.target.checked;
      if (e.target.checked) {
        toDoTask.classList.add('linethrough-text');
      } else {
        toDoTask.classList.remove('linethrough-text');
      }

      if (currentState !== previousState) {
        storeTasks.forEach((task) => {
          if (task.description === toDoTask.value) {
            task.completed = currentState;
          }
        });

        storeLocalStorage(storeTasks);
      }
      previousState = currentState;
    });
  });

  const addedTasks = document.querySelectorAll('.description-text');
  addedTasks.forEach((task, index) => {
    task.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.target.readOnly = false;
      const tempStoreIcons = task.parentElement.parentElement.querySelector('.fa-ellipsis-vertical');
      if (tempStoreIcons) {
        const ellipsisIcon = tempStoreIcons;
        const index = ellipsisIcon.getAttribute('id');
        task.parentElement.parentElement.classList.add('bg-orange');
        ellipsisIcon.classList.remove('fa-ellipsis-vertical');
        ellipsisIcon.classList.add('fa-solid');
        ellipsisIcon.classList.add('fa-trash');
        remove(ellipsisIcon, index);
      } else {
        task.parentElement.parentElement.classList.remove('bg-orange');
        const trashIcon = task.parentElement.parentElement.querySelector('.fa-trash');
        trashIcon.classList.remove('fa-soild');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        e.target.readOnly = true;
      }
    });
    // Edit
    task.addEventListener('change', () => {
      const data = task.value.trim();
      storeTasks = edit(storeTasks, data, index);
      storeLocalStorage(storeTasks);
      showTask();
    });
  });
};

clearBtn.addEventListener('click', () => {
  storeTasks = clearAll(storeTasks);
  storeLocalStorage(storeTasks);
  showTask();
});

function handleDOMContentLoaded() {
  showTask();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
addBtn.addEventListener('click', () => {
  const descriptionInput = document.getElementById('add-task-input');
  const description = descriptionInput.value.trim();
  if (description !== '') {
    const newTask = {
      description,
      completed: false,
      index: storeTasks.length + 1,
    };
    storeTasks = addTask(storeTasks, newTask);
    storeLocalStorage(storeTasks);
    descriptionInput.value = '';
    showTask();
  }
});