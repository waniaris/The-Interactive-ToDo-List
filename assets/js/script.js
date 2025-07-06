const newTaskInput = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

function updateMoveButtons() {
  const tasks = taskList.children;
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const upBtn = task.querySelector(".move-up");
    const downBtn = task.querySelector(".move-down");

    // Enable both buttons by default
    upBtn.disabled = false;
    downBtn.disabled = false;

    // Disable up button for first task
    if (i === 0) {
      upBtn.disabled = true;
    }
    // Disable down button for last task
    if (i === tasks.length - 1) {
      downBtn.disabled = true;
    }
  }
}

function onClickAddButton() {
  let taskInputValue = newTaskInput.value.trim();
  errorMsg.style.display = "none";

  if (taskInputValue === "") {
    errorMsg.textContent = "Oops, empty input. Please type in a task.";
    errorMsg.style.display = "block";
    return;
  }

  // Check for duplicates
  let existingTasks = document.querySelectorAll("#taskList li label");
  for (let i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].textContent === taskInputValue) {
      errorMsg.textContent = "This task already exists.";
      errorMsg.style.display = "block";
      return;
    }
  }

  let li = document.createElement("li");
  li.className = "d-flex align-items-center mb-2";

  let label = document.createElement("label");
  label.textContent = taskInputValue;
  label.className = "flex-grow-1 ms-2";

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-sm btn-outline-secondary ms-2";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-sm btn-outline-danger ms-1";

  let upBtn = document.createElement("button");
  upBtn.textContent = "↑";
  upBtn.className = "btn btn-sm btn-outline-primary me-1 move-up";
  upBtn.title = "Move task up to increase priority";

  let downBtn = document.createElement("button");
  downBtn.textContent = "↓";
  downBtn.className = "btn btn-sm btn-outline-primary move-down";
  downBtn.title = "Move task down to decrease priority";

  // Edit button handler
  let editing = false;
  editBtn.addEventListener("click", function () {
    if (!editing) {
      label.setAttribute("contenteditable", "true");
      label.style.backgroundColor = "#fff3cd";
      label.focus();
      editBtn.textContent = "Save";
    } else {
      label.removeAttribute("contenteditable");
      label.style.backgroundColor = "transparent";
      editBtn.textContent = "Edit";
    }
    editing = !editing;
  });

  // Delete button handler
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateMoveButtons();
  });

  // Move up handler
  upBtn.addEventListener("click", function () {
    let prev = li.previousElementSibling;
    if (prev !== null) {
      taskList.insertBefore(li, prev);
      updateMoveButtons();
    }
  });

  // Move down handler
  downBtn.addEventListener("click", function () {
    let next = li.nextElementSibling;
    if (next !== null) {
      taskList.insertBefore(next, li);
      updateMoveButtons();
    }
  });

  // Append buttons and label to li
  li.appendChild(upBtn);
  li.appendChild(downBtn);
  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add the li to the list
  taskList.appendChild(li);

  // Clear input field
  newTaskInput.value = "";

  // Update move buttons states
  updateMoveButtons();
}

addButton.addEventListener("click", onClickAddButton);
