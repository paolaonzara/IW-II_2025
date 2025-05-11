function corTexto(){
    document.getElementById("div").style.color = "blue";
    }
    
    
    
    
    document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("ex7").addEventListener("click",corTexto);
    });