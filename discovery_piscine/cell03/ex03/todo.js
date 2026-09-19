window.onload = function() {
    let todos = getTodos();
    todos.forEach(todo => addTodoToDOM(todo));
};

document.getElementById("newBtn").addEventListener("click", function() {
    let task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTodoToDOM(task);
        saveTodos();
    }
});

function addTodoToDOM(task) {
    let ftList = document.getElementById("ft_list");
    let div = document.createElement("div");
    div.textContent = task;
    div.style.cursor = "pointer";

    div.addEventListener("click", function() {
        if (confirm("Do you want to remove this TO DO?")) {
            ftList.removeChild(div);
            saveTodos();
        }
    });

    ftList.insertBefore(div, ftList.firstChild);
}

function saveTodos() {
    let todos = [];
    let ftList = document.getElementById("ft_list").children;
    for (let item of ftList) {
        todos.push(item.textContent);
    }
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function getTodos() {
    let name = "todos=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let c of ca) {
        c = c.trim();
        if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return [];
}