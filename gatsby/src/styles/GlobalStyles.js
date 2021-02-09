import { createGlobalStyle } from 'styled-components';

import cursor from '../images/cursor.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #EAE7E2;
    --black: #000000;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
    cursor: url('${cursor}'), auto;	
    @media (max-width: 768px) {
      font-size: 7px;
  }
  }

  body {
    font-size: 2rem;
    background-color: var(--bg);
    overflow-x: hidden;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }


  /* Scrollbar Styles */
  /* body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--bg) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--bg) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  } */



  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cursor {
    opacity: 0;
    width: 40px;
    height: 40px;
    border: solid 1px white;
    border-radius: 50%;
    position: absolute;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
}
`;

export default GlobalStyles;
