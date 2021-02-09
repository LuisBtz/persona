import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const HomePage = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        indexImage: file(relativePath: { eq: "bg-home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        home: sanityHome {
          name
          description
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    `
  );

  // Set ImageData
  const imageData = data.indexImage.childImageSharp.fluid;

  // Campos del cms
  const descriptionText = data.home.description;
  const imageHome = data.home.image.asset.fluid;
  return (
    <BackgroundImage fluid={imageHome} Tag="section" className={className}>
      <h1>{descriptionText}</h1>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(HomePage)`
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
`;

export default StyledBackgroundSection;
