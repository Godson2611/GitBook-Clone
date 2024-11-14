import image_6 from "../assets/image_6.svg";
import lock_icon from '../assets/lock_icon.svg'

const VisitorAuthentication = () => {
  return (
    <section id="visitor-authentication" className='full-width visitor__container'>
      <div className='content-holder my-auto w-100 text-center text-md-start'>
        <div className='text-container'>
          <span className='text-uppercase text-white'>
            <img src={lock_icon} alt="" />
            Visitor authentication
          </span>
          <h2 className='my-md-4 text-white'>
            Control access to your published docs
          </h2>
          <p className='w-md-75 text-white'>
            Choose who can access your documentation. With visitor
            authentication, you can keep sensitive information away from
            competitors and hackers. So only your chosen customers, team members
            or authorized users can view your docs.
          </p>
          <button className='btn bg__yellow mt-3'>Find out more</button>
        </div>
        <div className='img-container'>
          <img
            src={image_6}
            alt='Public Document image'
          />
        </div>
      </div>
    </section>
  );
};
export default VisitorAuthentication;
