import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title" title="Mohammed Rasheek M">
            Mohd Rash
          </h1>
          <PText>
            Im a passionate stack developer, linux enthusiast, entrepreneur,
            coo, devops, community head. I love to code, hike mountains, travel,
            learn different cultures and lifestyles of people.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+919061402804',
                path: 'tel:+919061402804',
              },
              {
                title: 'iamrasheek00@gmail.com',
                path: 'mailto:iamrasheek00@gmail.com',
              },
              {
                title: 'still unknown, luckily im in planet earth!',
                path:
                  'https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/MohdRash',
              },
              {
                title: 'Discord',
                path:
                  'https://discord.com/channels/923474578381082624/923474578381082627',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/m__rshk/',
              },
              {
                title: 'Parrot dev',
                path: 'https://community.parrotsec.org/u/rash/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            Made with <i className="bx bx-coffee" /> by Mohd Rash
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
