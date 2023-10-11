let text=document.getElementById('text');
let bg=document.getElementById('bg');
let man=document.getElementById('man');
let clouds1=document.getElementById('clouds_1');
let cloud2=document.getElementById('clouds_2');
let mountainsLeft=document.getElementById('mountain_left');
let mountainsRight=document.getElementById('mountain_right');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;

    text.style.marginTop=value * 2.5 + 'px';
    mountainsLeft.style.top=value * -1.5 + 'px';
    mountainsRight.style.left=value * 1.5 + 'px';
    clouds1.style.left=value * -1.5 + 'px';
    cloud2.style.right=value * 1.5 + 'px';
    man.style.bottom=value * 1 + 'px';


})