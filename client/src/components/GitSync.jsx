import image_9 from '../assets/image_9.svg';
import github_icon from '../assets/github_icon.svg'

const GitSync = () => {
  return (
    <section id="git-sync" className='full-width gitSYNC__container'>
      <div className='content-holder my-auto w-100 text-center text-md-start'>
        <div className='text-container'>
          <span className='text-uppercase'>
            <img src={github_icon} alt="" />
            git sync</span>
          <h2 className='my-md-4'>
            Collaborate on docs like you collaborate on code
          </h2>
          <p className='w-md-75'>
            Sync your docs with a GitHub or GitLab repository and everyone can
            contribute to your docs, wherever they prefer to work. So your
            technical writers can use WYSIWYG editor, while engineers add to
            your docs directly in Git. And everything stays in sync, with
            feedback and reviews to guarantee quality.
          </p>
          <button className='btn btn-dark mt-3'>Discover Git Sync</button>
        </div>
        <div className='img-container'>
          <img src={image_9} alt='Public Document image' />
        </div>
      </div>
    </section>
  );
};
export default GitSync;
