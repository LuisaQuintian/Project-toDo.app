window.onload = function() {
    const getColor = localStorage.getItem('color')
    if(getColor == '') {
        colorSwitch(pink)
    } else {
        colorSwitch(getColor)
    }

    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks) {
        tasks.forEach(task => {
            addNewItem(task)
        })
    } 
  }

function addNewItem(task) {
    //1 - Get data from the input and from the local storage
    let newItem = document.getElementById('new-task-input').value

    if (task) {newItem = task.text}
    if (task && task.checked) {
        taskEl.classList.add('checked')
    }

    //2 - Check if the input was filled
    if (newItem === "") {return}

    //3 - Put the data into the list
    const taskEl = document.createElement("li")
    taskEl.innerHTML = `${newItem} <a onclick='removeEl(this)' href="#">X</a>` //Remove
    const element = document.getElementById('listUl')
    element.appendChild(taskEl)
    taskEl.classList.add('listItem')

    //Check
    taskEl.addEventListener('click', () => {
        taskEl.classList.toggle('checked')
        updateLS()
    })

    //4 - Clean the input
    document.getElementById('new-task-input').value = ''

    //5 - Remove the first item
    if (document.querySelector('.firstItem')) {
    document.querySelector('.firstItem').remove()}

    //6 - Update local storage
    updateLS()
}

function removeEl(e) {
    e.parentElement.remove()
    updateLS()
}

function toggle() {
    document.getElementById('modal').classList.toggle('hidden')
}

function colorSwitch(color) {
    let bodyColor = document.getElementById("body-color")
    bodyColor.removeAttribute("class")
    switch (color) {
        case 'pink':
            bodyColor.classList.add('pink');
            localStorage.setItem("color", "pink")
            break
        case 'purple':
            bodyColor.classList.add('purple');
            localStorage.setItem("color", "purple")
            break
        case 'blue':
            bodyColor.classList.add('blue');
            localStorage.setItem("color", "blue")
            break
        case 'green':
            bodyColor.classList.add('green');
            localStorage.setItem("color", "green")
            break
        case 'yellow':
            bodyColor.classList.add('yellow');
            localStorage.setItem("color", "yellow")
            break
        default:
            bodyColor.classList.add('pink');
            localStorage.setItem("color", "pink")
    }
    document.getElementById('modal').classList.add('hidden')
}

function updateLS() {
    const tasksEl = document.querySelectorAll('li')
    const tasks = []

    tasksEl.forEach(taskEl => {
        tasks.push({
            text: taskEl.innerText,
            completed: taskEl.classList.contains('checked')
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
