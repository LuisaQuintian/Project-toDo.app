window.onload = function() {
    const getColor = localStorage.getItem('color')
    if(getColor == '') {
        colorSwitch(pink)
    } else {
        colorSwitch(getColor)
    }
  };


function addNewItem() {
    //1 - Get data from the input
    const newItem = document.getElementById('new-task-input').value

    //2 - Check if the input was filled
    if (newItem === "") {return}

    //3 - Put the data into the list
    const taskEl = document.createElement("li")
    taskEl.innerHTML = newItem
    const element = document.getElementById('listUl')
    element.appendChild(taskEl)
    taskEl.classList.add('listItem')

    //4 - Add event listener 
    taskEl.addEventListener('click', () => {
        taskEl.classList.toggle('checked')
    })

    //4 - Clean the input
    document.getElementById('new-task-input').value = ''

    //5 - Remove the first item
    document.querySelector('.firstItem').remove() 
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
    // toggle()
    
    document.getElementById('modal').classList.add('hidden')
}


    //     //3.1 - create a <li> element
    //     const li = document.createElement('li')
    //     //3.2 - create a text node
    // const node = document.createTextNode(`${newItem}`)
    //     //3.3 - append the thext node to the <li> element'
    // li.appendChild(node)
    //     //3.4 - append the new element to an existing element inthe html
    // const element = document.getElementById('listUl')
    // element.appendChild(li)