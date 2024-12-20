import { HomePageMain, HomePageTitle, HomePageText, HomePageImg } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageMain>
        <HomePageTitle>
          Take good <span>care</span> of your small pets
        </HomePageTitle>
        <HomePageText>
          Choosing a pet for your home is a choice that is meant to enrich your life with
          immeasurable joy and tenderness.
        </HomePageText>
      </HomePageMain>
      <HomePageImg />
    </>
  );
};

export default HomePage;
