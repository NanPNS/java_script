function myFunction(){
    alert("Hello CSMJU");
    console.log("สวัสดี JavaScript")
    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML = "Change....";

    document.getElementById("header1").style.color ="red";

        var x=8;
        var y=20;
        var z=3;

        //หาค่าเฉลี่ย

        document.getElementById("header2").innerHTML =
                ((x+y+z)/3).toFixed(2);

}

function likeFunction(){
    var counter =parseInt ( document.getElementById("result").innerText);

    counter ++;
    document.getElementById("result").innerText = counter;

    //เพิ่ม counter 1
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 1
    document.getElementById("result").style.fontSize = 10 + counter + "px";
    document.getElementById("myIcon").className = "fa-solid fa-heart";



}

function loveFunction(){

    //เพิ่ม counter 10
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 5



}
function SadFunction(){

    //เพิ่ม counter 10
    //ปรับขนาดตัวอักษรเพิ่มขึ้น 5



}