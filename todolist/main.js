document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');
  li.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');
  checkbox.addEventListener('change', toggleCompleted);

  const textNode = document.createTextNode(taskText);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  li.appendChild(checkbox);
  li.appendChild(textNode);
  li.appendChild(deleteBtn);

  document.getElementById('todoList').appendChild(li);

  taskInput.value = '';
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

function toggleCompleted(event) {
  const taskItem = event.target.parentElement;
  taskItem.classList.toggle('completed');
}
