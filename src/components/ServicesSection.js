import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <Row className="container">
        <SectionTitle
          subheading="Where I'm Contributing In"
          heading="Contributions"
        />
        <Col style={{ padding: '0 10 0 10' }} className="services__allItems">
          <ServicesSectionItem
            icon={
              <img
                src="https://res.cloudinary.com/osperbian/image/upload/v1651396159/myslef_data/dreamr-logo_o5qvhm.png"
                style={{ width: '160px', height: '50px' }}
                className="grayscale"
                alt="trace-labs"
              />
            }
            className="col-4"
            title="Dreamr"
            desc="We are a team of ordinary people who have become extraordinary dreamers by following our hearts and taking action on our passions. We believe in the limitless potential of the human spirit, which means (if you're a human being reading this) that we believe in your limitless potential, period."
          />
          <ServicesSectionItem
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/516px-Epic_Games_logo.svg.png"
                style={{ width: '100px' }}
                className="grayscale"
                alt="Epic-games"
              />
            }
            className="col-4"
            title="Epic Games"
            desc="The world’s most open and advanced real-time 3D creation tool. Unreal creators are the true power behind Unreal Engine"
          />
          <ServicesSectionItem
            icon={
              <img
                src="https://duckduckgo.com/i/5b387344.png"
                style={{ width: '100px' }}
                className="grayscale"
                alt="Parrot-sec"
              />
            }
            className="col-4"
            title="Parrot Sec"
            desc="We are the Parrot Project, is a worldwide community of developers and security specialists that work together to build a shared framework of tools to make their job easier, standardized and more reliable and secure."
          />
        </Col>
      </Row>
    </ServicesItemsStyles>
  );
}
