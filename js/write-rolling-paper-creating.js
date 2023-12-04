let text = document.getElementById('text');
let normalBtn = document.getElementsByClassName('font-change')[0];
let boldBtn = document.getElementsByClassName('font_change')[0];
let italicBtn = document.getElementsByClassName('font_change')[0];


function changeFont(font){
    console.log(font , text.value);
    text.style.fontFamily = font; 
}
    