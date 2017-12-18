"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");
let toggle = require("./disabled");


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
        // let index = msgArr.indexOf(msgObject); 
        // output.newOutputToDom(msgObject, index);
        // toggle.toggleDisabled();
        input.value=""; 
          
    }
});

