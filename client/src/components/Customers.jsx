import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Testimonail from '../components/Testimonail'

import cardBg from '../assets/card-bg.avif'
import heart_icon from '../assets/heart_icon.svg';

const Customers = () => {
  const items = [
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5 text-uppercase fs-2">first slide</h1>
      <blockquote className="w-85 text-justify">
        <q>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </q>
      </blockquote>
      <p> bymeandmyself</p>
    </div>,
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5 text-uppercase fs-2">second slide</h1>
      <blockquote className="w-85 text-justify">
        <q>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </q>
      </blockquote>
      <p> bymeandmyself</p>
    </div>,
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5 text-uppercase fs-2">third slide</h1>
      <blockquote className="w-85 text-justify">
        <q>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </q>
      </blockquote>
      <p> bymeandmyself</p>
    </div>,
  ];

  return (
    <section id="customers" className="full-width">
      <div>
          <img src={heart_icon} alt="" className="section-logo" />
          <h3 className="fs-2">Our customers <br /> love GitBook!</h3>
      </div>
      <div className="card-container">
          <div className="container">
            <div className="img-container">
            <img src={cardBg} alt="" />
            </div>
            <AliceCarousel mouseTracking items={items} />
          </div>
      </div>
      <Testimonail />
    </section>
  );
};
export default Customers;
