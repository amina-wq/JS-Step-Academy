// Напишите запрос на сервер с помощью ajax и jquery. 
// Должен быть ненумерованный список с элементами с сервера. Рисуйте только title.

$(document).ready(function(){   
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'GET',
        dataType: "json",
        success: function(data) {
            let list = $('<ul></ul>');
            $.each(data, function(index, todo){
                let listItem = $('<li></li>').text(todo.title);
                list.append(listItem)
            });
            $('body').append(list)
        },

    });
});