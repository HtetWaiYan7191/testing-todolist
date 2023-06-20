const loadTask = (tasks) => {
  let taskListHTML = '';
  tasks.forEach((task, index) => {
    taskListHTML += `<li class="d-flex align-items-center task p-4 justify-content-between"><div class="checkbox-container"><input type="checkbox" name="${task.description}" id="checkbox-container"><input type="text" value="${task.description}" class="description-text w-75"></div><i class="fa-solid fa-ellipsis-vertical fs-3" id=${index}></i></li>
    `;
  });
  return taskListHTML;
};

export default loadTask;