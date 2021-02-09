import React from 'react';

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

export default function AboutPage(props) {
  return (
    <AboutSection>
      <h3 className="pageName">About</h3>
      <section>
        {/* <h2>Art is a catalyst for change.</h2>
        <br />
        <br />
        <br />
        <h2>
          The voices of artists are essential to shape a balanced society.
        </h2>
        <br />
        <br />
        <br />
        <h2>Art must be available to everyone.</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          <b>Persona</b> was conceived in 2018, thanks to the support of the
          Rockefeller Brothers Fund, as an exchange program providing artists
          with the opportunity to live and create work between{' '}
          <b>Monterrey, Mexico</b> and <b>New York.</b>
        </p>
        <br />
        <br />
        <br />
        <p>
          We are committed to commissioning multidisciplinary art projects to
          mark the culmination of each artist’s residency, such projects
          include, artist lectures, installations, sound compositions, endurance
          performances, monographic exhibitions, and architectural
          interventions.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Our Mission</h3>
        <br />
        <br />
        <br />
        <p>
          Expand the understanding of contemporary art while serving as a bridge
          that fosters an exchange between creatives throughout Mexico and
          abroad.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Our Vision</h3>
        <br />
        <br />
        <br />
        <p>
          To incite knowledge creation, experimentation, new modes of
          collaboration, and the coproduction of awareness, dialogue, and
          solutions for the pressing challenges affecting us today.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Our Ethos</h3>
        <br />
        <br />
        <br />
        <p>
          We are interested in the fissures and crossovers between different
          disciplines particularly art, architecture, and design.
          <b> Persona </b>
          sees itself as a producer of art and culture, not just a frozen frame
          for it, therefore making both its <b>physical space</b> and{' '}
          <b>digital portals</b>, outlets for creative expression and content
          generation.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="#">Donate</a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
      </section>
    </AboutSection>
  );
}
