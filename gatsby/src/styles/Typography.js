import { createGlobalStyle } from 'styled-components';

import nimBoldEot from '../assets/fonts/NimbusSansDOT-BoldExte.eot';
import nimBoldSvg from '../assets/fonts/NimbusSansDOT-BoldExte.svg';
import nimBoldTtf from '../assets/fonts/NimbusSansDOT-BoldExte.ttf';
import nimBoldWoff from '../assets/fonts/NimbusSansDOT-BoldExte.woff';
import nimBoldWoff2 from '../assets/fonts/NimbusSansDOT-BoldExte.woff2';

import nimRegEot from '../assets/fonts/NimbusSansDOT-ReguExte.eot';
import nimRegSvg from '../assets/fonts/NimbusSansDOT-ReguExte.svg';
import nimRegTtf from '../assets/fonts/NimbusSansDOT-ReguExte.ttf';
import nimRegWoff from '../assets/fonts/NimbusSansDOT-ReguExte.woff';
import nimRegWoff2 from '../assets/fonts/NimbusSansDOT-ReguExte.woff2';

const Typography = createGlobalStyle`

@font-face {
    font-family: 'Nimbus Bold';
    src: url('${nimBoldEot}');
    src: url('${nimBoldEot}?#iefix') format('embedded-opentype'),
        url('${nimBoldWoff2}') format('woff2'),
        url('${nimBoldWoff}') format('woff'),
        url('${nimBoldTtf}') format('truetype'),
        url('${nimBoldSvg}#NimbusSansDOT-BoldExte') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nimbus Regular';
    src: url('${nimRegEot}');
    src: url('${nimRegEot}?#iefix') format('embedded-opentype'),
        url('${nimRegWoff2}') format('woff2'),
        url('${nimRegWoff}') format('woff'),
        url('${nimRegTtf}') format('truetype'),
        url('${nimRegSvg}#NimbusSansDOT-BoldExte') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

:root {
    --bold: 'Nimbus Bold';
    --regular: 'Nimbus Regular';
}


  html, body {
    font-family: var(--bold);
    color: var(--black);
    line-height: .9;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6,p {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 6rem;
    text-align: center;

  }


  h2 {
    font-size: 5rem;
  }
  h3 {
    font-size: 4rem;
  }

  h4 {
    font-size: 2.1rem;
    @media (max-width: 768px) {
      font-size: 3rem;
  }
  }
  p {
    font-family: var(--regular);
  }
  strong, b {
    font-family: var(--bold);
  }
  a {
    color: var(--black);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }



`;

export default Typography;
