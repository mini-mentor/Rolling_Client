let text = document.getElementById('text');
let sender = document.getElementById('sender_input');
let normalBtn = document.getElementsByClassName('font-change')[0];
let boldBtn = document.getElementsByClassName('font_change')[0];
let italicBtn = document.getElementsByClassName('font_change')[0];
let currentFont = 'normal';

function changeFont(font){
    console.log(font , text.value);
    text.style.fontFamily = font; 
    currentFont = font;
}
    
function findFont(){
    console.log(currentFont , text.value);
    return currentFont;
}

// function showListMemo(){
//     var memo = document.createElement('div');
//     var fromSender = document.createElement('div');
    
//     var text = text.value;
//     var senderName = sender.value;
//     memo.innerText= text;
//     fromSender.innerText = `From. ${senderName}`;
//     memo.className = 'memo';
//     fromSender.className = 'from_sender';
    
//     console.log(memo);
//     paper.appendChild(memo);
//     memo.appendChild(fromSender);
// }