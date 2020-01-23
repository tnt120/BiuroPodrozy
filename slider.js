var slider = new Array("zdjecia/cyprprom.jpg","zdjecia/RasAlKhaimahprom.jpg","zdjecia/turcjaprom.jpg","zdjecia/dubajprom.jpg")

var aktualne = 0;

function prev(){
    if(aktualne == 0){
        aktualne = slider.length;
    }
    aktualne--;
    
    if(aktualne == 0 ){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Cypr";
        document.getElementById("slider_mn").innerHTML = "2500 zł";
        document.getElementById("slider_wk").innerHTML = "2199 zł";
    }
    else if(aktualne == 1){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Ras Al Khaimah";
        document.getElementById("slider_mn").innerHTML = "6299 zł";
        document.getElementById("slider_wk").innerHTML = "5999 zł";
    }
    else if(aktualne == 2){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Turcja";
        document.getElementById("slider_mn").innerHTML = "1600 zł";
        document.getElementById("slider_wk").innerHTML = "1400 zł";
    }
    else if(aktualne == 3){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Dubaj";
        document.getElementById("slider_mn").innerHTML = "3399 zł";
        document.getElementById("slider_wk").innerHTML = "3200 zł";
    }
}

function next(){
    aktualne++;
    if(aktualne == slider.length){
        aktualne = 0;
    }
    
    if(aktualne == 0 ){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Cypr";
        document.getElementById("slider_mn").innerHTML = "2500 zł";
        document.getElementById("slider_wk").innerHTML = "2199 zł";
    }
    else if(aktualne == 1){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Ras Al Khaimah";
        document.getElementById("slider_mn").innerHTML = "6299 zł";
        document.getElementById("slider_wk").innerHTML = "5999 zł";
    }
    else if(aktualne == 2){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Turcja";
        document.getElementById("slider_mn").innerHTML = "1600 zł";
        document.getElementById("slider_wk").innerHTML = "1400 zł";
    }
    else if(aktualne == 3){
        document.getElementById("ofertysl").src = slider[aktualne];
        document.getElementById("slider_miejsce").innerHTML = "Dubaj";
        document.getElementById("slider_mn").innerHTML = "3399 zł";
        document.getElementById("slider_wk").innerHTML = "3200 zł";
    }
}