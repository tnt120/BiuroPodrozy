function data(){
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    if(secs < 10)   secs = '0' + secs;
    if(mins < 10)   mins = '0' + mins;
    if(hours < 10)  hours = '0' + hours;
    document.getElementById("czas").innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval('data()',1000);


function odlicz(){
    var wakacje = new Date("June 26, 2020");
    var now = new Date();
    var ile = wakacje.getTime() - now.getTime();
    var days = Math.floor(ile / (1000*60*60*24));
    document.getElementById("odliczanie").innerHTML = days + "dni";
}
setInterval('odlicz()',1000);