let addToButton = document.getElementById('add_btn');
let inputField = document.getElementById('input_field');
let toDoContainer = document.getElementById('c_id');

addToButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('container');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = " ";

    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })

})