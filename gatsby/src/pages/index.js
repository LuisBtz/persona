import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';


export const query = graphql`
{
  home: sanityHomePage {
    backgroundImage {
      asset {
        fluid(maxWidth: 1200) {
          ...GatsbySanityImageFluid
        }
      }
    }
    description {
      es
    }
    imageUrl {
      es
    }
    name {
      es
    }
    slug {
      current
    }
  }
}`

const HomePage = ({ data }) => {

  const sanityHome = data.home;



  const image = getImage(sanityHome)

  const bgImage = sanityHome.backgroundImage.asset.fluid


  return(
<StyledBackgroundSection fluid={bgImage}>
      <h1>{sanityHome.description.es}</h1>
      {sanityHome.imageUrl.es ? <a href={sanityHome.imageUrl.es}></a> : null}
    </StyledBackgroundSection>
  );
  
}

const StyledBackgroundSection = styled(BackgroundImage)`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: hidden;
  position: absolute;
  z-index: 0;
  box-sizing: border-box;
  h1 {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--bg);
  }
  a {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
`;

export default HomePage;

