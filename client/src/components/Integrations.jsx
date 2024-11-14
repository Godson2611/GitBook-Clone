import image_7 from "../assets/image_7.png"

const Integrations = () => {
  return (
    <section id="integrations" className='full-width integrations__container'>
      <div className='content-holder my-auto w-100 text-center text-md-start'>
        <div className='img-container'>
          <img src={image_7} alt='integrations' />
        </div>
        <div className='text-container'>
          <span className='text-uppercase text-white'>Integrations</span>
          <h2 className='my-md-4 text-white'>Integrate with your stack</h2>
          <p className='w-md-75 text-white'>
            Install one of our verified integrations, or build your own with our
            API. Because a great knowledge management system should work with
            everything you use on a daily basis.
          </p>
          <button className='btn bg__yellow mt-3'>See our integrations</button>
        </div>
      </div>
    </section>
  );
};
export default Integrations;
