import styled from 'styled-components';
import imgMob1x from '../../assets/homePage/homePage_m.jpg';
import imgMob2x from '../../assets/homePage/homePage_m@2x.jpg';
import imgTab1x from '../../assets/homePage/homePage_t.jpg';
import imgTab2x from '../../assets/homePage/homePage_t@2x.jpg';
import img1x from '../../assets/homePage/homePage_d.jpg';
import img2x from '../../assets/homePage/homePage_d@2x.jpg';

export const HomePageImg = styled.div`
  display: block;

  width: 100%;
  height: 402px;

  background-image: url(${imgMob1x});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 30px;

  /* High-resolution mobile */
  @media only screen and (max-width: 767px) {
    background-image: url(${imgMob2x});
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    height: 496px;

    background-image: url(${imgTab1x});

    border-radius: 60px;
  }

  /* High-resolution tablet */
  @media screen and (min-width: 768px) and (min-resolution: 192dpi) {
    height: 496px;

    background-image: url(${imgTab2x});

    border-radius: 60px;
  }

  /* Desktop */
  @media screen and (min-width: 1280px) {
    height: 384px;
    background-image: url(${img1x});
  }

  /* High-resolution desktop */
  @media screen and (min-width: 1280px) and (min-resolution: 192dpi) {
    height: 384px;
    background-image: url(${img2x});
  }
`;
