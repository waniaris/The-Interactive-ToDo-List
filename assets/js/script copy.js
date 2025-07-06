const newTaskInput = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

function onClickAddButton() {
  const taskInputValue = newTaskInput.value.trim();
  errorMsg.style.display = "none";

  if (taskInputValue === "") {
    errorMsg.textContent = "Oops, empty input. Please type in a task.";
    errorMsg.style.display = "block";
    return;
  }

  const existingTasks = document.querySelectorAll("#taskList li label");
  for (const lbl of existingTasks) {
    if (lbl.textContent === taskInputValue) {
      errorMsg.textContent = "This task already exists.";
      errorMsg.style.display = "block";
      return;
    }
  }

  const li = document.createElement("li");
  li.className = "d-flex align-items-center mb-2";

  const label = document.createElement("label");
  label.textContent = taskInputValue;
  label.className = "flex-grow-1 ms-2";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-sm btn-outline-secondary ms-2";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-sm btn-outline-danger ms-1";

  li.appendChild(label);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  let editing = false;
  editBtn.addEventListener("click", () => {
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

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  newTaskInput.value = "";
}

addButton.addEventListener("click", onClickAddButton);
