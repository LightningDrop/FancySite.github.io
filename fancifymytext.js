button.addEventListener("click",myFunction());
document.getElementById("FancyShmancy").addEventListener("change",myFunction2());

function myFunction(){

    document.getElementById("bigger").style.fontSize = "1.5em";
    
}

function myFunction2(){
    if(document.getElementById("FancyShmancy").checked){

        document.getElementById("FancyShmancy").style.fontWeight = 'bold';

    }else if(document.getElementById("BoringBetty").checked){

        document.getElementById("BoringBetty").style.fontWeight = 'normal';

    }
}