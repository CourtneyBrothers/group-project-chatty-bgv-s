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


