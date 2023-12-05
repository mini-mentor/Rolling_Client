let text = document.getElementById('text');
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