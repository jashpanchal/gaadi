canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

bgimage="KesVC.jpg";
carswidth=20;
carsheight=10;
car2img="887d9872643d696f81599530d6e79fc1.png";
car1img="car1.png";
car1_x=500;
car1_y=30;
car2_x=500;
car2_y=50;
whichcarwon=".";
finishline_x=460;
finishline_y=70;
function add(){
    bgimage_Tag=new Image();
    bgimage_Tag.onload=upload_bg;
    bgimage_Tag.src=bgimage;

    car2img_Tag=new Image();
    car2img_Tag.onload=upload_car2;
    car2img_Tag.src=car2img

    car1img_Tag=new Image();
    car1img_Tag.onload=upload_car1;
    car1img_Tag.src=car1img;
}
function whowon(){
    console.log(whichcarwon);
    if(car1_x==finishline_x && car1_y<=finishline_y){
        if (whichcarwon="."){
        whichcarwon="CAR1 WON!!!";
        console.log("CAR1 WONNNNNNNNN");
        document.getElementById("won").innerHTML=whichcarwon;
        }
    }
    if(car2_x==finishline_x && car2_y<=finishline_y){
        if (whichcarwon="."){
        whichcarwon="CAR2 WON!!!";
        console.log("CAR2 WONNNNNNNNN");
        document.getElementById("won").innerHTML=whichcarwon;
        }
    }
}
function w(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("When w pressed,car1 x= " + car1_x + ", y= " + car1_y+".");
        upload_bg();
        upload_car1();upload_car2();whowon();
    }
}
function upload_bg(){
    ctx.drawImage(bgimage_Tag,0,0,canvas.width,canvas.height);
}
function upload_car2(){
    ctx.drawImage(car2img_Tag,car2_x,car2_y,carswidth,carsheight);
}
function upload_car1(){
    ctx.drawImage(car1img_Tag,car1_x,car1_y,carswidth,carsheight);
}
function s(){
    if(car1_y<600){
    car1_y=car1_y+10;
    console.log("When s pressed,car1 x= " + car1_x + ", y= " + car1_y+".");
    upload_bg();
    upload_car1();upload_car2();whowon();
    }
}

function a(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("When a pressed,car1 x= " + car1_x + ", y= " + car1_y+".");
        upload_bg();
        upload_car1();upload_car2();whowon();
    }
}
function d(){
    if(car1_x<=900){
        car1_x=car1_x+10;
        console.log("When d pressed,car1 x= " + car1_x + ", y= " + car1_y+".");
        upload_bg();
        upload_car1();upload_car2();whowon();
    }
}
function upa(){
    if(car2_y>0){
        car2_y=car2_y-10;
        console.log("When up arrow pressed,car2 x= " + car2_x + ", y= " + car2_y+".");
        upload_bg();
        upload_car2();upload_car1();whowon();
    }
}
function downa(){
    if(car2_y<600){
        car2_y=car2_y+10;
        console.log("When down arrow pressed,car2 x= " + car2_x + ", y= " + car2_y+".");
        upload_bg();
        upload_car2();upload_car1();whowon();
    }
}
function lefta(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("When left arrow pressed,car2 x= " + car2_x + ", y= " + car2_y+".");
        upload_bg();
        upload_car2();upload_car1();whowon();
    }
}
function righta(){
    if(car2_x<900){
        car2_x=car2_x+10;
        console.log("When right arrow pressed,car2 x= " + car2_x + ", y= " + car2_y+".");
        upload_bg();
        upload_car2();upload_car1();whowon();
    }                                                                                                                                                                                                                                                                                                                                                                               
}
window.addEventListener("keydown",keydowns)
function keydowns(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87')
    {
        w();
        console.log("up car1");
    }
    if (keyPressed == '83')
    {
        s();
        console.log("down car1")
    }
    if (keyPressed == '65')
    {
        a();
        console.log("left car1")
    }
    if (keyPressed == '68')
    {
        d();
        console.log("right car1")
    }
    if (keyPressed == '38')
    {
        upa();
        console.log("up car2")
    }
    if (keyPressed == '40')
    {
        downa();
        console.log("down car2")
    }
    if (keyPressed == '37')
    {
        lefta();
        console.log("left car2");
    }
    if (keyPressed == '39')
    {
        righta();
        console.log("right car2");
    }
}

