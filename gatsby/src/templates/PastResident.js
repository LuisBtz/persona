import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

import Img from 'gatsby-image';

const PastSection = styled.div`
  width: 100%;
  section {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    width: 60%;
    margin: 0 auto;
    margin-bottom: 100px;
    @media (max-width: 768px) {
      width: 75%;
    }
    .grid {
      margin-top: 50px;
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-template-rows: 1fr;
      grid-gap: 50px;
      height: 100%;
    }
  }
  .pageName {
    position: absolute;
    top: 25px;
    left: 35px;
  }
  .titulo {
    text-align: center;
  }
  .info {
    margin-bottom: 100px;
  }
  p {
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export default function SinglePastResidents({ data: { pastResident } }) {
  const images = pastResident.images;
  return (
    <PastSection>
      <h3 className="pageName">
        <Link to="/pastResidents">Past Residents</Link>
      </h3>
      <section>
        <h3 className="titulo">{pastResident.name}</h3>
        <div className="grid">
          {/* <Img fluid={image01} className="carlos-martiel" /> */}
          {images.map((image) => (
            <Img fluid={image.asset.fluid} className="carlos-martiel" />
          ))}
        </div>
        <div className="info">
          <BlockContent blocks={pastResident._rawBodyField} />
        </div>
      </section>
    </PastSection>
  );
}

export const query = graphql`
  query($slug: String!) {
    pastResident: sanityResidents(slug: { current: { eq: $slug } }) {
      name
      id
      images {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
      _rawBodyField
    }
  }
`;
