let contentBox = document.getElementsByClassName('middle_box')[0];
let createBtn = document.getElementsByClassName('edit_btn')[0];
let paper = document.getElementsByClassName('middle_box')[0];

let memoboxList = [];
// for(var x of memoboxList){
//     createListMemo(x);
// }
// var text = 'test';
// var senderName = 'testUser';

function showListMemo(){
    var memo = document.createElement('div');
    var fromSender = document.createElement('div');
    
    memo.innerText= text;
    fromSender.innerText = `From. ${senderName}`;
    memo.className = 'memo';
    fromSender.className = 'from_sender';
    
    console.log(memo);
    paper.appendChild(memo);
    memo.appendChild(fromSender);
}