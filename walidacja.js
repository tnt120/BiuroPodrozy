var wzorimie = /^[A-Z]{1}[a-z]+$/;
var wzormail = /^\w+[@]\w+\.[a-zA-Z]{2,3}$/;
var wzortelefon1 = /^\d{3}-\d{3}-\d{3}$/;
var wzortelefon2 = /^\d{9}$/;

function sprawdz1(){
    var imie = document.getElementById("imie").value;
    if(wzorimie.test(imie) == false){
        alert("Źle wpisałeś imię!");
        document.getElementById("imie").value = null;
    }
}

function sprawdz2(){
    var mail = document.getElementById("mail").value;
    if(wzormail.test(mail) == false){
        alert("Źle wpisałeś email!");
        document.getElementById("email").value = null;
    }
}

function sprawdz3(){
    var telefon = document.getElementById("telefon").value;
    if(wzortelefon1.test(telefon) == false){
        alert("Źle wpisałeś telefon!");
        document.getElementById("telefon").value = null;
    }
}