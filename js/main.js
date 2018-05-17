var $main = $('.main')
var $list = $('.list')
var $form = $('.form')
var $formContainer = $('.form-container')
var $button = $('.btn')
var $toDo = $('#todo')

// prepend new item to list
$form.on('submit', function(evt) {
    evt.preventDefault()
    var toDoValue = $toDo.val()
    
    $list.prepend(`
        <p>
            <input type="checkbox">
            <i class="glyphicon glyphicon-star"></i>
            <span>${toDoValue}</span>
            <i class="glyphicon glyphicon-remove"></i>
        </p>
    `)
    $toDo.val("")
})






