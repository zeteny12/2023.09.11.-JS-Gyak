const a_input = document.getElementById("a_szam");
const b_input = document.getElementById("b_szam");
const kijelzo = document.getElementById("eredmeny");

function osszead(){
    a= parseFloat(a_input.value);
    b= parseFloat(b_input.value);
    kijelzo.innerHTML = "Összeadva: " + (a+b).toString(); 
}

function kivon(){
    a= parseFloat(a_input.value);
    b= parseFloat(b_input.value);
    kijelzo.innerHTML = "Kivonva: " + (a-b).toString(); 
}

function szoroz(){
    a= parseFloat(a_input.value);
    b= parseFloat(b_input.value);
    kijelzo.innerHTML = "Szorozva: " + (a*b).toString(); 
}

function oszt(){
    a= parseFloat(a_input.value);
    b= parseFloat(b_input.value);
    kijelzo.innerHTML = "Osztva: " + (a/b).toString(); 
}