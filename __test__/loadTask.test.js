import loadTask from '../src/modules/loadTask.js';

describe('loadTask', () => {
  test('generates correct HTML for tasks', () => {
    const tasks = [
      { description: 'Task 1' },
    ];

    const expectedHTML = `<li class="d-flex align-items-center task p-4 justify-content-between"><div class="checkbox-container"><input type="checkbox" name="Task 1" id=""><input type="text" value="Task 1" class="description-text w-75"></div><i class="fa-solid fa-ellipsis-vertical fs-3" id=0></i></li>
    `;

    const receivedHTML = loadTask(tasks);
    const receivedStr = receivedHTML.trim();
    const generatedHTML = expectedHTML.trim();
    expect(receivedStr).toBe(generatedHTML);
  });
});
