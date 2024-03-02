// 假设 tasks 是一个包含任务信息的数组，每个任务对象包括 name 和 deadline 属性
const tasks = [
    { name: 'Task 1', deadline: '2024-03-05' },
    { name: 'Task 2', deadline: '2024-03-10' },
    { name: 'Task 3', deadline: '2024-03-15' }
];

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    displayTasks();
});

// 显示任务列表
function displayTasks() {
    const taskListElement = document.getElementById('task-list');

    // 遍历任务数组，为每个任务创建一个列表项并添加到页面中
    tasks.forEach(task => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = `Task: ${task.name}, Deadline: ${task.deadline}`;
        taskListElement.appendChild(listItemElement);
    });
}
