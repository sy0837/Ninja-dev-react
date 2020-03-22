const menubtn=document.querySelector('.menu-btn');
const ham=document.querySelector('.menu-btn_burger');

const nav=document.querySelector('.nav');
const nav_item=document.querySelector('.menu-nav');
const navItem=document.querySelectorAll('.menu-nav_item');

let show=false;

menubtn.addEventListener('click',toggleBtn);

function toggleBtn(){
    if(show==false){
        ham.classList.add('open');
        nav.classList.add('open');
        nav_item.classList.add('open');
        navItem.forEach(item => item.classList.add('open'));
        show=true;
    }else{
        ham.classList.remove('open');
        nav.classList.remove('open');
        nav_item.classList.remove('open');
        navItem.forEach(item => item.classList.remove('open'));
        show=false;
    }
}