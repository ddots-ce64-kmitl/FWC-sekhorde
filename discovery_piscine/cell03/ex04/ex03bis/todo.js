$(document).ready(function() {
    loadTodos();
    $('#newBtn').on('click', function() {
        let task = prompt("Enter a new TO DO:");
        if (task && task.trim() !== "") {
            addTodoToDOM(task.trim());
            saveTodos();
        }
    });
    function addTodoToDOM(task) {
        let $div = $('<div></div>')
            .text(task)
            .css('cursor', 'pointer')
            .on('click', function() {
                if (confirm("Do you want to remove this TO DO?")) {
                    $(this).remove();
                    saveTodos();
                }
            });
        $('#ft_list').prepend($div);
    }
    function saveTodos() {
        let todos = [];
        $('#ft_list').children('div').each(function() {
            todos.push($(this).text());
        });
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
    }
    function loadTodos() {
        let cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf("todos=") === 0) {
                try {
                    let todos = JSON.parse(decodeURIComponent(cookie.substring(6)));
                    // กลับลำดับข้อมูลก่อนวนลูป เพื่อให้เมื่อใช้ prepend() แล้วลำดับยังคงถูกต้อง
                    todos.reverse().forEach(function(task) {
                        addTodoToDOM(task);
                    });
                } catch (e) {
                    console.error("Error parsing todos cookie:", e);
                }
            }
        }
    }
});