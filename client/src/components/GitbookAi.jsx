import image_5 from '../assets/image_5.svg'
import stars_icon from '../assets/stars_icon.svg'

const GitbookAi = () => {
  return (
    <section id="gitbook-ai" className='full-width gitBookAI__container'>
      <div className='content-holder my-auto w-100 text-center text-md-start'>
        <div className='img-container'>
          <img src={image_5} alt='Public Document image' />
        </div>
        <div className='text-container'>
          <span className='text-uppercase'>
            <img src={stars_icon} alt="" />
            GitBook AI</span>
          <h2 className='my-md-4'>Smarter, AI-powered documentation</h2>
          <p className='w-md-75'>
            Improve your writing with a click. GitBook AI can simplify, shorten,
            or translate any text you want — or even just write a first draft
            for you. And because GitBook AI is trained on your docs, you can ask
            it a question and get the answer you need instantly. And so can your
            users.
          </p>
          <button className='btn btn-dark mt-3'>Explore GitBook AI</button>
        </div>
      </div>
    </section>
  );
};
export default GitbookAi;
