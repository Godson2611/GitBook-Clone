import image_3 from "../assets/image_3.svg";
import close_book_icon from '../assets/close_book_icon.svg';

const InternalDocs = () => {
  return (
    <section id="internal-docs" className='full-width internalDocs__container'>
      <div className='content-holder my-auto w-100 text-center text-md-start'>
        <div className='img-container'>
          <img src={image_3} alt='Public Document image' />
        </div>
        <div className='text-container'>
          <span className='text-uppercase'>
            <img src={close_book_icon} alt="" />
            Internal docs</span>
          <h2 className='my-md-4'>Better internal docs</h2>
          <p className='w-md-75'>
            Find the perfect new home for your organization’s code docs,
            technical wikis, product plans, API documentation and more. GitBook
            is flexible, and uses a Git-like branching workflow your team will
            love.
          </p>
          <button className='btn btn-dark mt-3'>Learn more</button>
        </div>
      </div>
    </section>
  );
};
export default InternalDocs;
