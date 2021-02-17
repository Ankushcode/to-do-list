//if user adds a note add it to the local storage
showTasks();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  tasksObj.push(addTxt.value);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  addTxt.value = "";
  //console.log(tasksObj);

  showTasks();
});

//function to show element from localStorage

function showTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }

  let html = "";

  tasksObj.forEach(function (element, index) {
    html += ` 
     <div class=" taskCard my-2 mx-2 card" style="width: 18rem;">
     <img src="./images/Download Young Person Playing With The Computer for free.jfif" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Task ${index + 1}</h5>   
       <p class="card-text"> ${element} </p>
       <button id="${index}" onclick="deleteTask(this.id)" class="btn btn-primary">Delete task</button>
     </div>
</div>`;
  });

  let tasksElm = document.getElementById("tasks");
  if (tasksObj.length != 0) {
    tasksElm.innerHTML = html;
  } else {
    tasksElm.innerHTML = `Nothing to show! add a task.`;
  }
}

//function to delete a task
function deleteTask(index) {
  //console.log("I am deleting", index);

  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  tasksObj.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  showTasks();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  //console.log("Input event fired!", inputVal);

  //to get the search task from all the tasks

  let taskCards = document.getElementsByClassName("taskCard");
  Array.from(taskCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "None";
      //console.log(cardTxt);
    }
  });
});
