//elements
const inputBox = document.querySelector(".inputField input");
const addbtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() != 0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}
showTasks();

addbtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("new todo");
    if(getLocalStorageData = null) {
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData) //mengubah json string ke
    }
}
listArray.push(userEnteredValue); //menambah data value ke array
localStorage.setItem("new todo", JSON.stringify(listArray))
showTasks();
addbtn.classList.remove("active"); //unactive btn

function showTasks() {
    let getLocalStorageData = localStorage.getItem("New todo")
    if(getLocalStorageData = null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTaksNumb = document.querySelector(".paddingTask")
    paddingTaskNumb.textContent = listArray.length;
    if (listArray.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.array.forEach(element => {
        newLiTag += <l1>$(element)open class="icon" onclick="deleteTask($(index))"x
                <i class="fas fa-trash"></i></l1>
    });
    todoList.innerHTML = newLiTag
    inputBox.value = ""
}

function deleteTasks(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index,1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTask();
}

deleteAllBtn.onclick = ()=>{
    let getLocalStorageData = localStorage.getItem("new todo");
    if(getLocalStorageData == nul){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
        listArray = [];
    }
    localStorage.setItem("new todo", JSON.stringify(listArray));
    showTask();
} 