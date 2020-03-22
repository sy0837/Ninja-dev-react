import React from 'react';
import './sass/style.scss';

const menubtn=document.querySelector('.menu-btn');
const ham=document.querySelector('.menu-btn_burger');

const nav=document.querySelector('.nav');
const nav_item=document.querySelector('.menu-nav');
const navItem=document.querySelectorAll('.menu-nav_item');
let show=false;

function toggleBtn(){
    if(show===false){
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


function navbar() {
    return (
         <header>
        <div className="menu-btn" onClick={toggleBtn}>
            <span className="menu-btn_burger"></span>
        </div>
        <nav className="nav">
            <ul className="menu-nav">
                <li className="menu-nav_item">
                    <a href="index.html" className="menu-nav_link active">
                        Home
                    </a>
                </li>
                <li class="menu-nav_item">
                    <a href="about.html" className="menu-nav_link">
                        About us
                    </a>
                </li>
                <li class="menu-nav_item">
                    <a href="project.html" className="menu-nav_link">
                        Projects
                    </a>
                </li>
           
            </ul>
        </nav>
    </header>
    );
}
export default navbar;