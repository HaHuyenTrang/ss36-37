var button = document.getElementById("button");
button.addEventListener("click", function hear(){
    if(button.innerText === "OFF"){
        button.innerText = "ON";
    }else{
        button.innerText = "OFF";
    }
});