import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Img from 'gatsby-image';

const UpcommingSection = styled.div`
  width: 100%;
  section {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    width: 60%;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 75%;
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
  }
  a {
    font-size: 3.5rem;
    &:hover {
      text-decoration: none;
    }
  }
  ul li a {
    font-family: var(--regular);
    font-size: 1.5rem;
  }
  article {
    margin-bottom: 70px;
  }
  article h3 {
    margin-top: 10px;
  }
`;

export default function UpcommingSectionPage() {
  const data = useStaticQuery(graphql`
    query {
      blogImage01: file(relativePath: { eq: "blog-01.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage02: file(relativePath: { eq: "blog-02.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage03: file(relativePath: { eq: "blog-03.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage04: file(relativePath: { eq: "blog-04.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage05: file(relativePath: { eq: "blog-05.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage06: file(relativePath: { eq: "blog-06.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage07: file(relativePath: { eq: "blog-07.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage08: file(relativePath: { eq: "blog-08.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blogImage09: file(relativePath: { eq: "blog-09.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
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

  return (
    <UpcommingSection>
      <h3 className="pageName">Upcoming</h3>
      <section>
        <article>
          <Link to="/projectU">
            <Img fluid={image02} className="carlos-martiel" />
            <h3>Gabriel Rico</h3>
            <p>January 16, 2021</p>
          </Link>
        </article>
        <article>
          <Link to="/projectU">
            <Img fluid={image02} className="carlos-martiel" />
            <h3>Gabriel Rico</h3>
            <p>January 16, 2021</p>
          </Link>
        </article>
        <article>
          <Link to="/projectU">
            <Img fluid={image02} className="carlos-martiel" />
            <h3>Gabriel Rico</h3>
            <p>January 16, 2021</p>
          </Link>
        </article>
        <article>
          <Link to="/projectU">
            <Img fluid={image02} className="carlos-martiel" />
            <h3>Gabriel Rico</h3>
            <p>January 16, 2021</p>
          </Link>
        </article>
      </section>
    </UpcommingSection>
  );
}
