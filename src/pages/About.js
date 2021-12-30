import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I'm <span>Mohammed Rasheek M</span>
              </p>
              <h2 className="about__heading">
                A Full-stack developer
                <br />+ Certified Hacker
              </h2>
              <div className="about__info">
                <PText>
                  I'm from Malappuram, Kerala. A place of beauty and nature.
                  Since my childhood, i love sports (like football and MMA),
                  hitch-hike and drawing. I always try to draw stuff with my
                  unique point of view. I also love to create things that can be
                  usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. I just got
                  volunteered with a game developers community called 'Gametop'
                  and was part in the development of two games 'sudden strike,
                  sudden strike Iwo Jima' Coding is also an art for me like I
                  love to hitch-hike. I was absolute noob when it comes to code
                  html, css, and js during my College time, I'm only familiar
                  with C++ and Aurduino. That I even tried to be like broken. It
                  becomes my favourite part when I was joined in Talrop, an
                  Engineers world and later joined with a cyber security team
                  under the mentorship of 'Mr.Gautam Kumawat'. I love it and now
                  I have the opportunity to design along with the coding. My
                  carrer become more stronger when I joined in Osperb
                  Innovations that I learned a lot and still working. I find it
                  really interesting and I enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. I have future
                  plan to control poverty and unemployment. But I know it will
                  take time and lots of efforts. I love to develop Operating
                  systems and still I'm working with one with three
                  environments. I struggled hard to make my dreams come true,
                  this time too I should need more patience and effort. Now
                  almost everything is becoming better than ever. It is time for
                  us to create more good stuff that helps the world to become a
                  better place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="High School"
                items={['THSS Vadakkangara, Malappuram (2014-2016)']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Nasra College Of Arts & science (2016-2019)']}
              />
              <AboutInfoItem
                title="Internship"
                items={['Talrop Techies Park (2019-2020)']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JS', 'Bootstrap', 'ReactJS']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['NodeJS', 'Express', 'C++', 'python', 'NodeRed(noob)']}
              />
              <AboutInfoItem
                title="Database"
                items={['Mongodb', 'Firebase', 'Mysql', 'PostgreSQl']}
              />
              <AboutInfoItem
                title="Cyber Sec"
                items={[
                  'nmap',
                  'metasploit',
                  'SE',
                  'nikto',
                  'steganography',
                  'OSINT',
                ]}
              />
              <AboutInfoItem
                title="Special"
                items={['Linux', 'Debian', 'Arch', 'kernal(noob)']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-"
                items={['Jnr developer at Epic Games']}
              />
              <AboutInfoItem
                title="2021-"
                items={['Developer at Parrot Sec']}
              />
              <AboutInfoItem
                title="2021-"
                items={['Software Engineer at Osperb Innovations']}
              />
              <AboutInfoItem
                title="2020-"
                items={['OSINT & Cyber Security Analyst at Trace Labs']}
              />
              <AboutInfoItem
                title="2019-2020"
                items={['Certified Hacker at HackingFlix']}
              />
              <AboutInfoItem
                title="2019-2019"
                items={['Software Engineer(intern) at Talrop']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
