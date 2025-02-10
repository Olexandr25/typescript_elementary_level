const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    addTask(task);
    renderTask(task);
    updateStorage();

    console.log('task: ', task);

    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});

// function createTask(event: SubmitEvent) {
//   event.preventDefault();

//   const taskDescription = formInput.value;
//   if (taskDescription) {
//     const task: Task = {
//       description: taskDescription,
//       isCompleted: false,
//     };

//     addTask(task);
//     renderTask(task);

//     formInput.value = '';
//     return;
//   }
//   alert('Please enter a task description');
// }

function addTask(task: Task): void {
  tasks.push(task);
  console.table(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;

  // checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // toggle task completion
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = taskCheckbox.checked;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  return [];
}
