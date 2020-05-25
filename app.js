var newItemCounter = 0;
var ul = document.getElementById("ourList");
var ourBTN = document.getElementById("button");
var headLine = document.getElementById("headLine");
var listItems = document.getElementById("ourList").getElementsByTagName("li");
var input = document.getElementById('myInput');
var clearBTN = document.getElementById("clear");
var notif = document.getElementById("alert");
// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', activateItem)
// }
ul.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        headLine.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove('active')
        }
        e.target.classList.add('active')
    }
}
for (i = 0; i < listItems.length; i++) {
    listItems[i].insertAdjacentHTML('afterbegin', `${newItemCounter+1 +" : " }`)
    newItemCounter++
    // listItems[i].innerHTML += `${  "  : " + newItemCounter}`
    // console.log(newItemCounter)
}
ourBTN.addEventListener('click', createNewItem)

function createNewItem() {
    if (input.value == "") {
        notif.style.display = "block"
    } else {
        notif.style.display = "none"
        newItemCounter++
        ul.innerHTML += ` <li> ${newItemCounter + " : " + myInput.value}</li>`
        myInput.value = ""
    }
}
clearBTN.addEventListener('click', () => {
    ul.innerHTML = ""
    newItemCounter = 0
    // newItemCounter = newItemCounter - 1
    // ul.lastChild.remove()
    // console.log(newItemCounter)

})

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button").click();
    }
});