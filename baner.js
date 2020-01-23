window.onload = rotate;

var Obrazy = new Array("zdjecia/cypr1.jpg","zdjecia/dubaj1.jpg","zdjecia/egipt1.jpg","zdjecia/turcja1.jpg");

var active = 0;

function rotate(){
    active++;
    if(active == Obrazy.length){
        active = 0;
    }
    document.getElementById("banner").src = Obrazy[active];
    
    setTimeout("rotate()",2000);
}