"use strict";

let messageController = require("./appData");



module.exports.removeMessage = () => {
    let msgArr = messageController.getMessages();
   
    let parentClass = event.target.closest(".parent");
    parentClass.remove();

    msgArr.splice(parseInt(parentClass.id),1);
    // & do i need to returN?? or just call output to dom
        //let index = msgArr.indexOf(msgObject); 
        //output.newOutputToDom(msgObject, index);
     //}
    return msgArr;    
};

