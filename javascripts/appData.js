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