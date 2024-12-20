import styled from 'styled-components';
import imgMob1x from '../../assets/homePage/homePage_m.jpg';
import imgMob2x from '../../assets/homePage/homePage_m@2x.jpg';
import imgTab1x from '../../assets/homePage/homePage_t.jpg';
import imgTab2x from '../../assets/homePage/homePage_t@2x.jpg';
import img1x from '../../assets/homePage/homePage_d.jpg';
import img2x from '../../assets/homePage/homePage_d@2x.jpg';

export const HomePageMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 50px 20px;
  padding-top: 118px; // для тестов, потом удалить

  border-radius: 30px;

  background-color: ${p => p.theme.colors.main};

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    gap: 32px;

    padding: 44px 32px;
    padding-top: 178px; // для тестов, потом удалить

    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 73px;

    padding: 32px 64px;
    padding-top: 178px; // для тестов, потом удалить
  }
`;

export const HomePageTitle = styled.h1`
  display: block;
  width: 100%;

  font-family: Manrope;
  font-size: 50px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${p => p.theme.colors.white};

  span {
    color: ${p => p.theme.colors.white40};
  }

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;

    font-size: 90px;
    line-height: 87px;
  }
`;

export const HomePageText = styled.p`
  display: block;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 255px;

    font-size: 18px;
    line-height: 22px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

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
