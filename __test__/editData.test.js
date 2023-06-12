import edit from '../src/modules/editData.js';

describe('editData', () => {
  let tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', completed: true },
  ];
  const oldDescription = tasks[0].description
  const index = 0;
  const updateDescription = 'this is updated task';
  test('should change tasks description in the tasks array', () => {
    tasks = edit(tasks, updateDescription, index);
    expect(tasks[index].description).toBe(updateDescription);
    expect(tasks[index].description).not.toBe(oldDescription);
  });
});