import { logoArray, logoArrayBlack } from "../assets/logoArray";

const Carousel = () => {
  return (
    <>
      <div
        className="slider breakout"
        style={{'--carousel-item-quantity': logoArray.length}}
      >
        <div className="list">
          {logoArray.map((logo, index) => (
            <div key={index} className="item" style={{'--position': index+1}}>
              <img src={logo} alt="company_icon" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const CarouselBlack = () => {
  return (
    <>
      <div
        className="slider breakout"
        style={{'--carousel-item-quantity': logoArrayBlack.length}}
      >
        <div className="list">
          {logoArrayBlack.map((logo, index) => (
            <div key={index} className="item" style={{'--position': index+1}}>
              <img src={logo} alt="company_icon" className="logo_black" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { CarouselBlack };

export default Carousel;
