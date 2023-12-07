let contentBox = document.getElementsByClassName('middle_box')[0];
let createBtn = document.getElementsByClassName('edit_btn')[0];
let paper = document.getElementsByClassName('middle_box')[0];

const shortenWords = (str, length = 30) => {
    let result = '';
    if (str.length > length) {
        result = str.substr(0, length - 2) + '...';
    } else {
        result = str;
    }
    return result;
}

function showListMemo() {
    var memo = document.createElement('div');
    var fromSender = document.createElement('div');

    var text = 'text.valuefkajfd;alkfjalsfafdk;afjdslf;sakldfjadssafdadfdfsl';

    text = shortenWords(text);
    var senderName = 'sender.value';
    senderName = shortenWords(senderName, 6)
    memo.innerText = text;
    fromSender.innerText = `From. ${senderName}`;
    memo.className = 'memo';
    fromSender.className = 'from_sender';


    // console.log(memo);
    paper.appendChild(memo);
    memo.appendChild(fromSender);

    linked();



}

function linked() {
    var memolist = document.getElementsByClassName('memo');
    console.log(memolist);
    Array.from(memolist).forEach(e => {
        console.log(e);
        e.addEventListener('click', () => { location.href = '\..\/write-rolling-paper-viewing.html' })
    });
}
