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

