const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character for '×' (close symbol)
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box after adding the task
    saveData();
}

// Corrected event listener for the list container
listContainer.addEventListener("click", function(e) { // Changed 'click00' to 'click'
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") { // Checks if the clicked element is the span
        e.target.parentElement.remove(); // Removes the parent `li` element
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();