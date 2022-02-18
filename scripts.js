function getVal(){
    var x = document.getElementById("inputName");
    document.getElementById("creditCardName").innerHTML = x.value.toUpperCase();
}

function changeColor(){
    if(document.getElementById("oneColorInput").checked){
        document.getElementById("creditCard").style.background = "linear-gradient(rgb(126, 57, 253), rgb(168, 75, 255))";
    } else if(document.getElementById("twoColorInput").checked){
        document.getElementById("creditCard").style.background = "linear-gradient(rgb(46, 46, 46), rgb(39, 39, 39))";
    } else if(document.getElementById("threeColorInput").checked){
        document.getElementById("creditCard").style.background = "linear-gradient(rgb(255, 199, 14), rgb(255, 166, 0))";
    } else if(document.getElementById("fourColorInput").checked){
        document.getElementById("creditCard").style.background = "linear-gradient(rgb(229, 255, 0), rgb(154, 179, 17))";
    }
}

function positionHorizontal(){
    if(document.getElementById("horizontal").click){
        document.getElementById("creditCard").style.transform = "rotate3d(2, -2, -2, -0.2turn)";
        document.getElementById("nu").style.transform = "rotate(0deg)";
        document.getElementById("nu").style.top = "66%";
        document.getElementById("nu").style.left = "4%";
        document.getElementById("nu").style.width = "15%";
        document.getElementById("nu").style.height = "15%";

        document.getElementById("boxText").style.transform = "rotate(0deg)";
        document.getElementById("boxText").style.width = "77%";
        document.getElementById("boxText").style.top = "82%"
        document.getElementById("boxText").style.left = "22%"

        document.getElementById("master").style.transform = "rotate(0deg)";
        document.getElementById("master").style.left = "67%";
        document.getElementById("master").style.top = "-10%";
        document.getElementById("master").style.width = "15%";
        document.getElementById("master").style.height = "15%";
    }
}

function positionVertical(){
    if(document.getElementById("vertical").click){
        document.getElementById("creditCard").style.transform = "rotate3d(2, -4, -4, -0.2turn)";
        document.getElementById("nu").style.transform = "rotate(-90deg)";
        document.getElementById("nu").style.left = "0%";
        document.getElementById("nu").style.top = "56%";
        document.getElementById("nu").style.width = "12%";
        document.getElementById("nu").style.height = "20%";

        document.getElementById("boxText").style.transform = "rotate(-90deg)";
        document.getElementById("boxText").style.width = "32%";
        document.getElementById("boxText").style.top = "45%";
        document.getElementById("boxText").style.left = "60%"

        document.getElementById("master").style.transform = "rotate(-90deg)";
        document.getElementById("master").style.left = "75%";
        document.getElementById("master").style.top = "-7%";
        document.getElementById("master").style.width = "10%";
        document.getElementById("master").style.height = "20%";
    }
}