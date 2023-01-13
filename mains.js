var enterButton = document.getElementById("enterBtn")
var input = document.getElementById("taskName")
var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li")

function inputLength(){
    return input.value.length
}

function createListElement(){
    var li = document.createElement("li")

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
    function riscando(){
        li.classList.toggle("done")
    }
    
    li.addEventListener("click", riscando)
}

enterButton.addEventListener("click", addListAfterClick)

function addListAfterClick() {
    if (inputLength()>0){
    createListElement()
    }
}

