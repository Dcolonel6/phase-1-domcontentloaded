// Your code goes here
document.addEventListener('DOMContentLoaded',() =>{
    ChangeText(document.getElementById('text'))

})

function ChangeText(domElement){
    domElement.textContent = "This is really cool!"
}