import logo from "../assets/gitbook_logo.svg";
import arrowRight from "../assets/arrow_right_icon.svg";
import Carousel from "./Carousel";

const HeroPage = () => {
  return (
    <>
      <section id='hero'>
        <div className='hero_content'>
          <img src={logo} alt='logo' className='logo' />
          <h1 className='text-white my-3'>
            Product documentation <br />
            <span className='text__light__blue'>your users will love</span>
          </h1>
          <p className='text-white fw-semibold'>
            Forget building your own custom docs platform. With GitBook you get
            beautiful <br /> documentation for your users, and a branch-based
            Git workflow for your team.
          </p>
          <div className='btns my-3'>
            <button className='btn btn-outline-light mx-2 fw-semibold'>
              Sign up with GitHub
            </button>
            <button className='btn bg__yellow mx-2 fw-semibold'>
              Start for free
            </button>
          </div>
        </div>
      </section>
      <Carousel />
      <Carousel />
    </>
  );
};
export default HeroPage;
