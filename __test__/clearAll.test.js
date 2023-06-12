import clearAll from '../src/modules/clearAll.js';

describe('clearAll', () => {
  let tasks = [
    { description: 'task1', completed: false },
    { description: 'task2', completed: true },
    { description: 'task3', completed: false },
  ];
  test('should return uncompleted tasks', () => {
    tasks = clearAll(tasks);
    expect(tasks).toHaveLength(2);
    expect(tasks[0].completed).toBe(false);
    expect(tasks[1].completed).toBe(false);
  });
});