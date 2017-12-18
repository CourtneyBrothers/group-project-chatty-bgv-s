"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");
let output = require("./outputToDom");

let messageController = require("./appData");

json.getjsonData();

let removeMessage = (event) => {
    if (event.target.className === "delete") {
        let arrayRemoved = del.removeMessage();
        output.updateDom(arrayRemoved);          
        
    }
    
};

document.querySelector("body").addEventListener("click", removeMessage);

let clearAll = () => {
    let clearedArr = messageController.clearAllMessages();
    output.updateDom(clearedArr);
    
};

document.getElementById("clear").addEventListener("click", clearAll);




let largeBtn = document.getElementById("large");
console.log(largeBtn);

largeBtn.addEventListener("click", ()=>{ 
    let output = document.getElementById("output");
    if (largeBtn.checked){
        console.log("is checked");
        console.log(largeBtn.checked);
        let output = document.getElementById("output");
        output.style.fontSize= "5rem";
    }else {
        output.style.fontSize = "1em";
    }
});


const nav = document.querySelector('#navigation');






//theme
let isChecked = false;
let drkTheme = document.getElementById("darkTheme");
drkTheme.addEventListener("click", function(){
    let themeChng = document.getElementById("bGround");
        if (isChecked === false){
            isChecked = true;
        }else {
            isChecked = false;
        }

        if (isChecked){
            themeChng.style.background = "rgba(14, 42, 84, 0.89)";
            themeChng.style.color = "rgba(255, 208, 52, 0.801)";
        } else {
            themeChng.style.background = "white";
            themeChng.style.color = "black";
        }
});

