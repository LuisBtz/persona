import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Img from 'gatsby-image';

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

export default function PastResidentsPage() {
  const data = useStaticQuery(graphql`
    query {
      blogImage01: file(relativePath: { eq: "blog-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage02: file(relativePath: { eq: "bg-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage03: file(relativePath: { eq: "blog-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage04: file(relativePath: { eq: "bg-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage05: file(relativePath: { eq: "blog-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage06: file(relativePath: { eq: "bg-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const image01 = data.blogImage01.childImageSharp.fluid;
  const image02 = data.blogImage02.childImageSharp.fluid;
  const image03 = data.blogImage03.childImageSharp.fluid;
  const image04 = data.blogImage04.childImageSharp.fluid;
  const image05 = data.blogImage05.childImageSharp.fluid;
  const image06 = data.blogImage06.childImageSharp.fluid;

  const [carlos, showCarlos] = useState(false);
  const [gabriel, showGabriel] = useState(false);
  const [lukas, showLukas] = useState(false);
  const [sol, showSol] = useState(false);
  const [hector, showHector] = useState(false);
  const [tezontle, showTezontle] = useState(false);

  return (
    <PastSection>
      <h3 className="pageName">Past Residents</h3>
      <section>
        <div className="lista">
          <h4>Residents</h4>
          <ul>
            <li>
              <Link
                to="/project"
                className="carlos-martiel"
                onMouseEnter={() => showCarlos(true)}
                onMouseLeave={() => showCarlos(false)}
              >
                Carlos Martiel
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="gabriel-rico"
                onMouseEnter={() => showGabriel(true)}
                onMouseLeave={() => showGabriel(false)}
              >
                Carlos Martiel Gabriel Rico
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="lukas-gschwandtner"
                onMouseEnter={() => showLukas(true)}
                onMouseLeave={() => showLukas(false)}
              >
                Lukas Gschwandtner
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="sol-oosel"
                onMouseEnter={() => showSol(true)}
                onMouseLeave={() => showSol(false)}
              >
                Sol Oosel
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hector-jimenez"
                onMouseEnter={() => showHector(true)}
                onMouseLeave={() => showHector(false)}
              >
                Héctor Jiménez
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="tezontle"
                onMouseEnter={() => showTezontle(true)}
                onMouseLeave={() => showTezontle(false)}
              >
                Tezontle
              </Link>
            </li>
          </ul>
        </div>
        <div className="imagenes">
          {carlos && <Img fluid={image01} className="carlos-martiel" />}
          {gabriel && <Img fluid={image02} className="gabriel-rico" />}
          {lukas && <Img fluid={image03} className="lukas-gschwandtner" />}
          {sol && <Img fluid={image04} className="sol-oosel" />}
          {hector && <Img fluid={image05} className="hector-jimenez" />}
          {tezontle && <Img fluid={image06} className="tezontle" />}
        </div>
      </section>
    </PastSection>
  );
}
