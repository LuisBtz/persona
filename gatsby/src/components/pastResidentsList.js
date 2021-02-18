import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

function SinglePastResident({ pastResident }) {
  return (
    <li>
      <Link
        to={`/pastResidents/${pastResident.slug.current}`}
        className={pastResident.slug.current}
        onMouseEnter={() => {
          console.log('Event:MouseEnter');
        }}
        onMouseLeave={() => {
          console.log('Event:MouseLeave');
        }}
      >
        {pastResident.name}
      </Link>
    </li>
  );
}

function SinglePastResidentImage({ pastResident }) {
  return (
    <Img
      fluid={pastResident.residentImage.asset.fluid}
      className={pastResident.slug.current}
    />
  );
}

const PastResidentsListSty = styled.div`
  .imagenes .gatsby-image-wrapper {
    display: none;
  }
`;

export default function PastResidentsList({ pastResidents }) {
  return (
    <PastResidentsListSty>
      <div className="lista">
        <h4>Residents</h4>
        <ul>
          {pastResidents.map((pastResident) => (
            <SinglePastResident
              key={pastResident.id}
              pastResident={pastResident}
            />
          ))}
        </ul>
      </div>
      <div className="imagenes">
        {pastResidents.map((pastResident) => (
          <SinglePastResidentImage
            key={pastResident.id}
            pastResident={pastResident}
          />
        ))}
      </div>
    </PastResidentsListSty>
  );
}
