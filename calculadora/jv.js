function insert(num){
    var numeracao = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = numeracao + num;
}
function clean(){
    var limpei = document.getElementById("visor").innerHTML = "";
}
function limpa1(){
    var lindeza = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = lindeza.substring(0, lindeza.length -1);
}

function calculo(){
    var calculo = document.getElementById("visor").innerHTML;
    if(calculo)
    {
        document.getElementById("visor").innerHTML = eval(calculo);
    }
    else{
        document.getElementById("visor").innerHTML = "erro";

    }
}
var videoz = document.getElementById("banner-video")
videoz.volume = 0.1