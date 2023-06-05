/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const taskContainer = document.querySelector('.tasks-container');

const tasks = [
  {
    description: 'this is description 1',
    completed: false,
    index: 0,
  },

  {
    description: 'this is description 2',
    completed: false,
    index: 1,
  },

  {
    description: 'this is description 3',
    completed: false,
    index: 2,
  },
];

const addTask = (e) => {
  tasks.forEach((task, index) => {
    taskContainer.innerHTML += `
            <li class="d-flex align-items-center task p-4 justify-content-between">
            <div class="checkbox-container">
                <input type="checkbox" name="checkbox1" id="${index}" ">
                <label for="${index}">${task.description}</label>
            </div>
            <i class="fa-solid fa-ellipsis-vertical fs-3 "></i>
        </li>
            `;
  });
};

addTask();