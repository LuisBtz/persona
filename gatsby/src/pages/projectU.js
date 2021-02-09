import React from 'react';

import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
  }
`;

export default function PastResidentsPage() {
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
  const image07 = data.blogImage07.childImageSharp.fluid;
  const image08 = data.blogImage08.childImageSharp.fluid;
  const image09 = data.blogImage09.childImageSharp.fluid;

  return (
    <PastSection>
      <h3 className="pageName">
        <Link to="/upcoming">Upcoming</Link>
      </h3>
      <section>
        <h3 className="titulo">Gabriel Rico</h3>
        <div className="grid">
          <Img fluid={image01} className="carlos-martiel" />
          <Img fluid={image02} className="carlos-martiel" />
          <Img fluid={image03} className="carlos-martiel" />
          <Img fluid={image04} className="carlos-martiel" />
          <Img fluid={image05} className="carlos-martiel" />
          <Img fluid={image06} className="carlos-martiel" />
          <Img fluid={image07} className="carlos-martiel" />
          <Img fluid={image08} className="carlos-martiel" />
          <Img fluid={image09} className="carlos-martiel" />
        </div>
        <div className="info">
          <p>
            <b>Gabriel Rico’s</b>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;journal
            and documentation of his project&nbsp;
            <b>“The Simple Answer is not Easy to Find”.</b> Alluding to the
            efforts of researchers and biologists who live for periods of time
            in Chipinque, Rico carried out his stay in a location destined for
            those who venture into the Park’s ecosystem with the purpose of
            studying it.
          </p>
          <br />
          <p>
            During his time there, he developed compositions that continue his
            exploration of the juxtaposition between the <b>natural</b> and
            the&nbsp;
            <b>artificial</b>, a characteristic component in the life of the
            park.
          </p>
          <br />
          <p>
            These subtle interventions can now be found in the park through the
            coordinates recorded in the journal, as well as an interactive map
            which serves as a guide to find the works left behind by the artist.
          </p>
        </div>
      </section>
    </PastSection>
  );
}
