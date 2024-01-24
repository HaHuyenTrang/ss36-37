var input = document.getElementById("input");
input.style.backgroundColor ="yellow";
input.addEventListener("click", function changeColor(){
    var input = document.getElementById("input");
    input.style.backgroundColor ="white ";

});

var button = document.getElementById("button");
button.addEventListener("click", function out(){
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    var input = document.getElementById("input");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
});
