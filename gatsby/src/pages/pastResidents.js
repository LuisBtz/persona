import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import PastResidentsList from '../components/pastResidentsList';

const PastSection = styled.div`
  width: 100%;
  section {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 4fr 2fr;
    @media (max-width: 768px) {
      width: 75%;
    }
    .lista ul {
      margin-top: 100px;
    }
  }
  .pageName {
    position: absolute;
    top: 25px;
    left: 35px;
  }
  p {
    font-family: var(--regular);
    font-size: 3.5rem;
  }
  a {
    font-size: 3.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  ul li a {
    font-family: var(--regular);
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  ul li {
    @media (max-width: 768px) {
      margin-bottom: 5px;
    }
  }
`;

export default function PastResidentsPage({ data }) {
  const pastResidents = data.pastResidents.nodes;

  return (
    <PastSection>
      <h3 className="pageName">Past Residents </h3>
      <section>
        <PastResidentsList pastResidents={pastResidents} />
      </section>
    </PastSection>
  );
}

export const query = graphql`
  query {
    pastResidents: allSanityResidents(filter: { current: { eq: true } }) {
      nodes {
        name
        slug {
          current
        }
        residentImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
