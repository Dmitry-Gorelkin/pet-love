import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin: 0px auto;

  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 375px) {
    width: 375px;

    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
