"use strict";

let messageController = require("./appData");
let output = require ("./outputToDom");

module.exports.getjsonData =() => {
    $.ajax({
        url:"messages.json",
    }).done(
            (data)=>{
                 console.log(data);
                parseMsg(data);
            }
        );
    
    // let preMsg = null;
    // const msgReq = new XMLHttpRequest();
    // msgReq.addEventListener("load", parseMsg);
    // msgReq.open("GET", "messages.json");
    // msgReq.send(); 
};

const parseMsg = (ajaxData) => {
    // const msgData = JSON.parse(event.target.responseText).messages;
    console.log("ajax data", ajaxData);
    for (let i = 0; i < ajaxData.messages.length; i++) {
        let arrayWithJson = messageController.addNewMessage(ajaxData.messages[i]); 
        output.updateDom(arrayWithJson);
    }      
};

// $.ajax({
//     url: "songs.json"
//   })
//   .done(executeAfterAjax)
//   .fail(ifBork);
  
//   function ifBork(data) {
//     console.log('Ooops', data);
//   }
  
//   function executeAfterAjax(data) {
//     console.log(data.songs);
//     let songs = data.songs;
//     $(songs).each( (index, song) => {
//       $("#song-list").append(`<li>${song.title}</li>`)
//     });
//   }