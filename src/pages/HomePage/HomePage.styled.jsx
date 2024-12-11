import styled from 'styled-components';

export const HomePagePicture = styled.picture`
  display: block;
  border-radius: 60px;
`;

export const HomePageSourceMobile = styled.source`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomePageSourceTable = styled.source`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const HomePageSource = styled.source`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
