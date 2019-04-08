
// window.onload = function(){
//
// };
//

// for the button
document.getElementById("biggerText").onclick = function (){
    // alert("Hello, world!");
    document.getElementById("input").style.fontSize = "24px";

};

// for the text box
let blingCheckBox = document.getElementById("bling");

blingCheckBox.onchange = function () {
    let input = document.getElementById("input");
    let body = document.getElementById("body");
    if(blingCheckBox.checked === true){
        input.style.color = "green";
        input.style.textDecoration = "underline";

        // get body
        body.className += " background";
    }else{
        //$("input").attr()
        input.style.color = "black";
        input.style.fontSize = "12px";

        body.className += " nobg";
    }
};

