let contentBox = document.getElementsByClassName('middle_box')[0];
let createBtn = document.getElementsByClassName('edit_btn')[0];
let paper = document.getElementsByClassName('middle_box')[0];

let memoboxList = [];
for(var x of memoboxList){
    createListMemo(x);
}
async function createListMemo(){
    var memo = document.createElement('div');
    memo.innerText= text;
    memo.className = 'memo';
    console.log(memo);
    paper.appendChild(memo);
}