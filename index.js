document.getElementById('addTaskBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents toggle when deleting
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
});