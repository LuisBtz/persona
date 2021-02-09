import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';

const ContactSection = styled.div`
  width: 100%;
  section {
    position: absolute;
    padding-bottom: 100px;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    @media (max-width: 768px) {
      width: 75%;
      grid-template-columns: 1fr;
      grid-gap: 50px;
    }
  }
  .pageName {
    position: absolute;
    top: 25px;
    left: 35px;
  }
  p {
    font-family: var(--regular);
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  a {
    font-family: var(--regular);
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  ul li a {
    font-family: var(--regular);
    font-size: 1.5rem;
  }
  .izquierda {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .iconos {
    display: flex;
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .insta {
      width: 20px;
      margin-right: 20px;
    }
    .face {
      width: 20px;
    }
  }
  .mapa iframe {
    width: 100%;
  }
`;

export default function ContactSectionPage() {
  const data = useStaticQuery(graphql`
    query {
      face: file(relativePath: { eq: "face.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      insta: file(relativePath: { eq: "insta.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const insta = data.insta.childImageSharp.fluid;
  const face = data.face.childImageSharp.fluid;

  return (
    <ContactSection>
      <h3 className="pageName">Contact</h3>
      <section>
        <div className="izquierda">
          <div className="datos">
            <p>Via Clodia 169</p>
            <p>SPGG, MX</p>
            <br />
            <br />
            <a href="mailto:info@per-sona.org">info@per-sona.org</a>
          </div>
          <div className="iconos">
            <div className="insta">
              <a href="#">
                <Img fluid={insta} className="carlos-martiel" />
              </a>
            </div>
            <div className="face">
              <a href="#">
                <Img fluid={face} className="carlos-martiel" />
              </a>
            </div>
          </div>
        </div>
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.192643892616!2d-100.37601828498101!3d25.66490798368083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bd8ca031f13f%3A0xfd74b677acfe3a66!2sV%C3%ADa%20Clodia%20169%2C%20Fuentes%20del%20Valle%2C%2066220%20Monterrey%2C%20N.L.!5e0!3m2!1ses!2smx!4v1611014576713!5m2!1ses!2smx"
            width="500"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </section>
    </ContactSection>
  );
}
