function addNewItem() {
    //1 - Get data from the input
    const newItem = document.getElementById('new-task-input').value

    //2 - verificar se foi preenchido
    if (newItem === "") {return}

    //3 - Put the data into the list
        //3.1 - create a <li> element
    const li = document.createElement('li')
        //3.2 - create a text node
    const node = document.createTextNode(`${newItem}`)
        //3.3 - append the thext node to the <li> element'
    li.appendChild(node)
        //3.4 - append the new element to an existing element inthe html
    const element = document.getElementById('listUl')
    element.appendChild(li)

    //4 - Clean the input
    document.getElementById('new-task-input').value = ''

    //5 - Remove the first item
    document.getElementById('firstItem').remove()  
}

function toggle() {
    document.getElementById('modal').classList.toggle('hidden')
}