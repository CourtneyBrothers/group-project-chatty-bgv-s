(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//THIS IS THE PRIVATE ARRAY

let msgArr = [];

//THIS IS THE SETTER FUNCTION

module.exports.addNewMessage = (newMsg) => {
    msgArr.push(newMsg);
    return msgArr;
};



module.exports.getMessages = () => {
    return msgArr;
};

module.exports.clearAllMessages = () => {
    msgArr = [];
    return msgArr;
};
},{}],2:[function(require,module,exports){
"use strict";

let messageController = require("./appData");



module.exports.removeMessage = () => {
    let msgArr = messageController.getMessages();
   
    let $parentClass = $(event.target).parent();
    $parentClass.remove();
    // let parentClass = event.target.closest(".parent");
    // parentClass.remove();

    msgArr.splice(parseInt($parentClass.id),1);
  
    return msgArr;    
};


},{"./appData":1}],3:[function(require,module,exports){
"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");



input.addEventListener("keypress", (e) => {
    let msgArr = messageController.getMessages();
    let output = require ("./outputToDom");
    const key = e.which || e.keyCode;
    if (key === 13){
        let message = input.value;
        let msgObject = {};
        msgObject.msg = message;
        let arrayWithInput = messageController.addNewMessage(msgObject);
        output.updateDom(arrayWithInput);
        input.value=""; 
        return arrayWithInput; //GET NEW ARRAY ADD
    }
    
});


},{"./appData":1,"./outputToDom":6}],4:[function(require,module,exports){
"use strict";

let messageController = require("./appData");
let output = require ("./outputToDom");

module.exports.getjsonData =() => {
    $.ajax({
        url:"messages.json",
    }).done(
            (data)=>{
                 console.log("json",data);
                parseMsg(data);
            }
        );
};

const parseMsg = (ajaxData) => {
    $(ajaxData.messages).each((index,message)=>{
        let arrayWithJson = messageController.addNewMessage(message);
        console.log("array with json",arrayWithJson); 
         output.updateDom(arrayWithJson);
    });
    // for (let i = 0; i < ajaxData.messages.length; i++) {
    //     let arrayWithJson = messageController.addNewMessage(ajaxData.messages[i]); 
    //     output.updateDom(arrayWithJson);
    // }      
};


},{"./appData":1,"./outputToDom":6}],5:[function(require,module,exports){
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


},{"./appData":1,"./delete":2,"./input":3,"./jsonData":4,"./outputToDom":6}],6:[function(require,module,exports){
"use strict";
let outputDiv = document.getElementById("output");


module.exports.updateDom = (objectArr) => {
    outputDiv.innerHTML = "";
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}"class="parent">${objectArr[i].msg} <button class="delete">Delete</button></div>`;
    }
    if (objectArr.length === 0){
        document.getElementById("clear").disabled = true;
    }else{
        document.getElementById("clear").disabled = false;
    }

    
};



},{}]},{},[5]);
