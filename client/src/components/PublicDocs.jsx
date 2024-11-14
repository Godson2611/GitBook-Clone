import image_4 from '../assets/image_4.svg';
import book_icon from '../assets/book_icon.svg'

const PublicDocs = () => {
  return (
    <section id="public-docs" className='full-width publicDocs__container'>
      <div className='content-holder my-auto w-100 text-center text-md-start'>
        <div className='text-container'>
          <span className='text-uppercase'>
            <img src={book_icon} alt="" />
            Public docs</span>
          <h2>Publish unbeatable documentation</h2>
          <p className='w-md-75 my-3'>
            Effortlessly migrate your product docs to GitBook, customize them to
            match your brand, then publish them to the world — or just a
            selected group, if you prefer. Then keep them updated with built-in
            content insights.
          </p>
          <button className='btn btn-dark mt-3'>Discover documentation</button>
        </div>
        <div className='img-container'>
          <img src={image_4} alt='Public Document image' />
        </div>
      </div>
    </section>
  );
};
export default PublicDocs;
