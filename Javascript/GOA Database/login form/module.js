const username = document.getElementById('username');
const login = document.getElementById('login');
const option = document.getElementById('select');

let arr = [];

function getSelectedOptionText() {
    let text = option.options[option.selectedIndex].text;
    arr.push(text);
}

login.addEventListener('click', function(event) {
    event.preventDefault()
    getSelectedOptionText()
    document.getElementById('login_form').style.display = 'none'
    document.getElementById('editable-table').style.display = 'block'
    console.log(arr)
    updateRole()
});

function updateRole() {
    const role = arr[0]

    const cells = document.querySelectorAll('#editable-table td')
   
    cells.forEach(cell => {
        if (role === 'moderator') {
            cell.setAttribute('contenteditable', 'true')
        } else {
            cell.setAttribute('contenteditable', 'false')
        }
    }) 
}
   
document.addEventListener('DOMContentLoaded', () => {
});
