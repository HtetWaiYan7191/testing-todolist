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
  // storeTasks.forEach((task, index) => {
  //   taskContainer.innerHTML += `
  //           <li class="d-flex align-items-center task p-4 justify-content-between">
  //               <div class="checkbox-container">
  //                   <input type="checkbox" name="${task.description}" id="">
  //                   <input type="text" value="${task.description}" class="description-text w-75">
  //               </div>
  //               <i class="fa-solid fa-ellipsis-vertical fs-3" id=${index}></i>
  //       </li>
  //           `;
  // });

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
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        console.log('Checkbox is checked');
      // Perform actions when checkbox is checked
      } else {
        console.log('Checkbox is unchecked');
      // Perform actions when checkbox is unchecked
      }
    });
  });

  // checkboxContainer.forEach((checkbox) => {
  //   const inputValues = checkbox.parentElement.firstElementChild.firstChild.nextElementSibling;
  //   console.log(inputValues)
  //   let previousState = false;
  //   let currentState = false;
  //   readOnlyAdd(inputValues);
  //   checkbox.addEventListener('change', (event) => {
  //     if (event.target.checked) {
  //       console.log(inputValues.classList)

  //     } else {
  //       console.log('else');
  //     }

  // if (currentState !== previousState) {
  //   storeTasks.forEach((task) => {
  //     if (task.description === inputValues.value) {
  //       task.completed = currentState;
  //     }
  //   });

  //   storeLocalStorage(storeTasks);
  // }

  //     previousState = currentState;
  //     currentState = !previousState;
  //     console.log(currentState)
  //   });
  // });

  const addedTasks = document.querySelectorAll('.task');
  addedTasks.forEach((task, index) => {
    task.addEventListener('dblclick', (e) => {
      e.target.readOnly = false;
      if (task.querySelector('.fa-ellipsis-vertical')) {
        const ellipsisIcon = task.querySelector('.fa-ellipsis-vertical');
        const index = ellipsisIcon.getAttribute('id');
        task.classList.add('bg-orange');
        ellipsisIcon.classList.remove('fa-ellipsis-vertical');
        ellipsisIcon.classList.add('fa-solid');
        ellipsisIcon.classList.add('fa-trash');
        remove(ellipsisIcon, index);
      } else {
        task.classList.remove('bg-orange');
        const trashIcon = task.querySelector('.fa-trash');
        trashIcon.classList.remove('fa-soild');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        e.target.readOnly = true;
      }
    });
    // Edit
    task.addEventListener('input', () => {
      const data = task.querySelector('input[type="text"]').value.trim();
      storeTasks = edit(storeTasks, data, index);
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