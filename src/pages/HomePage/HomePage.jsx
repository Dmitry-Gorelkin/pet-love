import img from '../../assets/homePage/homePage_d.jpg';
import img2x from '../../assets/homePage/homePage_d@2x.jpg';
import imgTablet from '../../assets/homePage/homePage_t.jpg';
import imgTablet2x from '../../assets/homePage/homePage_t@2x.jpg';
import imgMobile from '../../assets/homePage/homePage_m.jpg';
import imgMobile2x from '../../assets/homePage/homePage_m@2x.jpg';

const HomePage = () => {
  return (
    <>
      <h1>Take good care of your small pets</h1>
      <p>
        Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable
        joy and tenderness.
      </p>

      {/* <div>
        <img src={img_d} alt="dog and woman" />
      </div> */}
      <picture>
        <source srcSet={`${imgMobile} 1x, ${imgMobile2x} 2x`} media="(min-width:375px)" />
        <source srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`} media="(min-width:768px)" />
        <source srcSet={`${img} 1x, ${img2x} 2x`} media="(min-width:1216px)" />

        <img src={imgMobile2x} alt="Парень в очках" />
      </picture>
    </>
  );
};

export default HomePage;
