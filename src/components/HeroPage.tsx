import React from 'react'
import styled from 'styled-components'
import { SiVisualstudiocode } from 'react-icons/si'

const Hero = styled.section`
    
width: 100%;
height: 100vh;
position: relative;

.hero__items {
  width: 100%;
  height: 100%;
  
  &-text {
    color: white;
    padding-top: 12%;
    text-align: center;
    
    h1 {
      font-size: 120px;
      font-weight: 900;
      line-height: 80%;
      letter-spacing: -3.5px;
      font-family: 'Inter', sans-serif;    
    }
    
    h3 {
      opacity: 70%;
      margin: 0 25%;
      font-size: 15px;
      font-weight: lighter;
      padding: 10px 0 40px 0;
      font-family: 'JetBrains Mono', monospace;
    }

    &-cta {
      gap: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      
      li {
        color: white;
        border-radius: 10px;

        a {
          color: inherit;
        }
      }

      .cta1 {
        font-size: 16px;
        transition: .3s;
        padding: 10px 30px;
        letter-spacing: 1px;
        background-color: #24BBB2;
        font-family: 'Inter', sans-serif;    

        &:hover {
          background-color: #24bbb1c7;
        }

        .vscode {
          padding-top: 5px;
        }
      }

      .cta2 {
        font-size: 16px;
        padding: 10px 30px;
        background-color: #2f3e4771;
        border: 1px solid #43525B;
        font-family: 'JetBrains Mono', monospace;
      }
    }

    p {
      left: 50%;
      bottom: 5%;
      opacity: 70%;
      position: fixed;
      transform: translate(-50%, -5%);
      font-family: 'JetBrains Mono', monospace;
    }
  }
}
`

function HeroPage() {
  return (
    <Hero>
      <div className="hero__items">
        <div className="hero__items-text">
          <h1>Kozy <br /> Theme</h1>
          <h3>Color theme extension that will make your editing window look cozy
             Available for VS Code for now, Atom and Sublime is still on work.</h3>
          <div className="hero__items-text-cta">
            <li className='cta1'><a href="https://marketplace.visualstudio.com/items?itemName=Artezio.kozy-theme">
            Visit Marketplace <SiVisualstudiocode className='vscode'/></a></li>
            <li className='cta2'>ext install kozy theme</li>
          </div>
          <p>Made with 💟 by Artezio</p>
        </div>
      </div>
    </Hero>
  )
}

export default HeroPage
