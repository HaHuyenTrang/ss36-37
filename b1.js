var button = document.getElementById("answer");
button.addEventListener("click", function text(){
    var input = document.getElementById("input");
    var inputValue = input.value;
    var check = false;
    for(let i=0; i<inputValue.length; i++){
        if(i>10){
            check = true;
        }
    }
    if(check){
        alert("số kí tự vượt quá 10");
    }else{
        alert("thành công");
    }
    
});