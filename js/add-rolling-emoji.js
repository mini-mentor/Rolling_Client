let emojis = document.querySelectorAll('.con');
let emojiStatus = [];

emojis.forEach(element => {
    element.addEventListener('click', ()=>{
        // console.log(element.firstElementChild.checked);//
        var radioisChecked = element.firstElementChild.checked;
        if( radioisChecked!== "checked"){
            element.firstElementChild.checked= "true";
        }
    })    
});
