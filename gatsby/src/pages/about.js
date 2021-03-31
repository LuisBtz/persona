import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const AboutSection = styled.div`
  width: 100%;
  section {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    width: 60%;
    margin: 0 auto;
  }
  .pageName {
    position: absolute;
    top: 25px;
    left: 35px;
  }
  p {
    font-family: var(--regular);
    font-size: 4rem;
  }
  a {
    font-size: 5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <AboutSection>
      {/* <h3 className='pageName'>{data.i18n.languages.name}</h3>
      <section>
        <BlockContent blocks={data.about._rawBody} />
      </section> */}
      <h1>test</h1>
    </AboutSection>
  );
}

// export const data = graphql`
//   query {
//     about: sanityAbout {
//           name
//           _rawBody
//           slug {
//             current
//           }
//     }
//   }
// `;
