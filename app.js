var list = document.getElementById("list")
function todo(){
    var input = document.getElementById("input")

    var li = document.createElement("li")
    var liText = document.createTextNode(input.value)

    li.appendChild(liText)

    list.appendChild(li)

    input.value=""

// create Delete Button

var del = document.createElement("button")
var delText = document.createTextNode("Delete")
del.appendChild(delText)
del.setAttribute("id" , "delbtn")
del.setAttribute("onclick" , "delItems(this)")

// create Edit Button
var edit = document.createElement("button")
var editText = document.createTextNode("edit")
edit.appendChild(editText)
edit.setAttribute("id" , "editbtn")
edit.setAttribute("onclick" , "editItems(this)")

li.appendChild(del)
li.appendChild(edit)
}



function delItems(e){
e.parentNode.remove()
}



function delAll(){
    list.innerHTML = ""
}



function editItems(e){
var value = prompt("Enter the value" , e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = value
}