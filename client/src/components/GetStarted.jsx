import { CarouselBlack } from "./Carousel";

const GetStarted = () => {
  return (
    <section id="get-started" className="full-width">
      <div className="holder">
        <div className="container">
          <div className="content">
            <h2>Get started</h2>
            <p>
              Play around with GitBook and set up your docs for free. <br /> Add your
              team and pay when you’re ready.
            </p>
            <div className="btns">
              <button className="btn btn-outline-dark mx-2 fw-semibold">
                Sign up with GitHub
              </button>
              <button className="btn bg__yellow btn-outline-dark mx-2 fw-semibold">
                Start for free
              </button>
            </div>
          </div>
          <CarouselBlack />
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
