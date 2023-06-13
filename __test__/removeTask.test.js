import removeTask from "../src/modules/removeTask";
describe('removeTask', () => {
    const tasks = [
        { description: 'Task1', completed: false },
        { description: 'Task2', completed: false },
    ];
    test('should remove the specific task for a new array', () => {
        const updatedTasks = removeTask(tasks, 1);
        expect(updatedTasks).toHaveLength(1);
        expect(updatedTasks).not.toContain(tasks[1]);
    });
});