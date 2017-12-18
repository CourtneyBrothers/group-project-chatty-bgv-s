"use strict";

let messageController = require("./appData");
let objArr = require("./outputToDom");

// module.exports.toggleDisabled = () => {
//     if (messageController.getMessages().length === 0) {
//         document.getElementById("clear").disabled = true;
//     } else {
//         document.getElementById("clear").disabled = false;    
//     }
// };

module.exports.Disabled = (array) => {
    if (array.length === 0) {
        document.getElementById("clear").disabled = true;
    // } else {
    //     document.getElementById("clear").disabled = false;    
    }
};

    