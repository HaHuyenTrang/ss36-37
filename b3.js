var input = document.getElementById("input");
input.addEventListener("input", function out(){
    var div = document.querySelector(".div");
    div.textContent = input.value;//cách1
    div.innerHTML = input.value;//cách2
})