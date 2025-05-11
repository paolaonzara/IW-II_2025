function addTexto(){
    document.getElementById("div").innerHTML = "<h1>Olá tudo bem?</h1><p>Você é um ET?</p>";
    }
    
    
    
    
    document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("atv6").addEventListener("click",addTexto);
    });