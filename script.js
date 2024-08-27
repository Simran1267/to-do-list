console.log("to do list");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must Write Something!");
    }
    else{
        let li  = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    SaveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // listcontainer mein jo bhi content hoga vo hamare browser mein store ho jayega in the name of data
}

// when we display the data when we open the site again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();