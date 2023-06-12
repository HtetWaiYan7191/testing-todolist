import addTask from '../src/modules/addTask.js';

describe('addTask', () => {
  const tasks = [
    { description: 'Task1', completed: false },
    { description: 'Task2', completed: false },
  ];
  test('should add a new task to the tasks array', () => {
    const newTask = { description: 'Task3', completed: false };
    const updatedTasks = addTask(tasks, newTask);

    expect(updatedTasks).toHaveLength(3);
    expect(updatedTasks[2]).toEqual(newTask);
  });
});