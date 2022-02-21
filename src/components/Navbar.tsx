import React from 'react'
import styled from 'styled-components'
import { BsInstagram,
         BsTwitter,
         BsGithub } from 'react-icons/bs'
import icon from '../images/icon.png'

// Styled components
const Nav = styled.div`

/* Nomralize */
width: 100%;
z-index: 900;
height: 100px;
position: fixed;
user-select: none;

.nav__items {
    width: 100%;
    height: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    
    &-logo {
        width: 40px;
        margin: 0 auto;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 50%;
        background-color: red;

        img {
            width: 40px;
        }
    }

    &-btn {
        
        button {
            color: white;
            font-size: 40px;
            transition: .3s ease-in-out;
            font-family: 'PP Neue Montreal';
        }
        
        button.active {
            transform: rotate(45deg);
        }
    }

    &-submenu {
        top: 12%;
        right: -10%;
        width: 52px;
        height: 142px;
        padding: 2% 0;
        position: fixed;
        text-align: center;
        border-radius: 10px;
        
        border: 1px solid #43525B;
        background-color: #2f3e4771;
        transition: .5s ease-in-out;

        li {
            padding: 5px 0;
            color: white;
            position: relative;

            &:hover {
                opacity: 50%;
                transition: .3s;
            }

            a {
                color: inherit;
            }
        }
    }

    &-submenu.active {
        right: 4%;
    }
}
`


function showmenu() {
    const submenu = document.getElementById('submenu')
    const toggleBtn = document.getElementById('toggleBtn') 
    
    toggleBtn!.classList.toggle('active');
    submenu!.classList.toggle('active');
}



function Navbar() {
  return (
    <Nav>
        <div className="nav__items">
            <div className="nav__items-logo">
                <img src={ icon } className="logo" alt="logo" />
            </div>
            <div className="nav__items-btn">
                <button className='toggle-btn' id='toggleBtn' onClick={showmenu}>+</button>
            </div>
            <ul className="nav__items-submenu" id='submenu'>
                <li><a href="https://instagram.com/artezio_"><BsInstagram /></a></li>
                <li><a href="https://twitter.com/Artezio0"><BsTwitter /></a></li>
                <li><a href="https://github.com/Artezi0"><BsGithub /></a></li>
            </ul>
        </div>
    </Nav>
  )
}

export default Navbar
