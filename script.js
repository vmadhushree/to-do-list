const taskForm = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const taskDateTimeInput = document.getElementById('task-datetime');

// Add Task Function
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskText = taskInput.value;
  const taskDateTime = taskDateTimeInput.value;

  if (taskText === '') {
    alert('Task cannot be empty');
    return;
  }

  const task = {
    text: taskText,
    dateTime: taskDateTime,
    completed: false
  };

  addTaskToDOM(task);

  taskInput.value = '';
  task