import code_icon from '../assets/code_icon.svg'
import dollar_icon from '../assets/dollar_icon.svg'
import git_icon from '../assets/git_icon.svg'
import github_icon from '../assets/github_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'
import youtube_icon from '../assets/youtube_icon.svg'
import close_book_icon from '../assets/close_book_icon.svg'
import book_icon from '../assets/book_icon.svg'
import document_icon from '../assets/document_icon.svg'
import heart_icon from '../assets/heart_icon.svg'
import lock_icon from '../assets/lock_icon.svg'
import mail_icon from '../assets/mail_icon.svg'
import menu_icon from '../assets/menu_icon.svg'
import notification_icon from '../assets/notification_icon.svg'
import play_icon from '../assets/play_icon.svg'
import profile_icon from '../assets/profile_icon.svg'
import puzzle_icon from '../assets/puzzle_icon.svg'
import round_icon from '../assets/round_icon.svg'
import rubber_tube_icon from '../assets/rubber_tube_icon.svg'
import stars_icon from '../assets/stars_icon.svg'
import code_curly_icon from '../assets/code_curly_icon.svg';
import calendar_icon from '../assets/calendar_icon.svg'
import aicpa_icon from '../assets/aicpa_icon.svg'
import logo from "../assets/gitbook_logo.svg";


const Footer = () => {
  return (
    <section id="footer" className='breakout footer__container'>
      <div className='row my-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 g-lg-3 ms-sm-5 ps-sm-5 text-center text-sm-start'>
        <div className='col'>
          <h5 className='text-white mb-4 fw-semibold'>Product</h5>
          <p className='text-white small fw-semibold'>
            <img src={book_icon} alt="" />
            Public docs</p>
          <p className='text-white small fw-semibold'>
            <img src={code_curly_icon} alt="" />
            API docs</p>
          <p className='text-white small fw-semibold'>
            <img src={close_book_icon} alt="" />
            Internal docs</p>
          <p className='text-white small fw-semibold'>
            <img src={stars_icon} alt="" />
            Enterprise</p>
          <p className='text-white small fw-semibold'>
            <img src={heart_icon} alt="" />
            Open source</p>
          <p className='text-white small fw-semibold'>
            <img src={play_icon} alt="" />
            Product tour</p>
          <p className='text-white small fw-semibold'>
            <img src={dollar_icon} alt="" />
            Pricing</p>
        </div>
        <div className='col'>
          <h5 className='text-white mb-4 fw-semibold'>Features</h5>
          <p className='text-white small fw-semibold'>
            <img src={lock_icon} alt="" />
            Visitor authentication</p>
          <p className='text-white small fw-semibold'>
            <img src={github_icon} alt="" />
            Git Sync</p>
          <p className='text-white small fw-semibold'>
            <img src={stars_icon} alt="" />
            GitBook AI</p>
          <p className='text-white small fw-semibold'>
            <img src={puzzle_icon} alt="" />
            Integrations</p>
        </div>
        <div className='col'>
          <h5 className='text-white mb-4 fw-semibold'>Resources</h5>
          <p className='text-white small fw-semibold'>
            <img src={document_icon} alt="" />
            Product docs</p>
          <p className='text-white small fw-semibold'>
            <img src={code_icon} alt="" />
            Developer docs</p>
          <p className='text-white small fw-semibold'>
            <img src={git_icon} alt="" />
            Blog</p>
          <p className='text-white small fw-semibold'>
            <img src={play_icon} alt="" />
            Videos</p>
          <p className='text-white small fw-semibold'>
            <img src={calendar_icon} alt="" />
            Events</p>
          <p className='text-white small fw-semibold'>
            <img src={mail_icon} alt="" />
            Changelog</p>
          <p className='text-white small fw-semibold'>
            <img src={profile_icon} alt='' />
            Security and compliance
          </p>
        </div>
        <div className='col'>
          <h5 className='text-white mb-4 fw-semibold'>Company</h5>
          <p className='text-white small fw-semibold'>About</p>
          <p className='text-white small fw-semibold'>Careers</p>
          <p className='text-white small fw-semibold'>Contact and support</p>
          <p className='text-white small fw-semibold'>Terms of service</p>
          <p className='text-white small fw-semibold'>Privacy policy</p>
        </div>
      </div>
      <hr className='text-white' />
      <div className='d-flex flex-wrap gap-4 justify-content-between align-items-center py-4'>
        <div className='d-flex gap-4 mb-2 mb-md-0 mx-auto align-items-center'>
          <p className='text-white'>iso</p>
          <img src={aicpa_icon} alt="" className='img-footer left' />
        </div>
        <div className='d-flex flex-column gap-1 my-sm-0' style={{'alignItems': 'center'}}>
          <img src={logo} alt="" style={{'width': '12rem', 'margin-bottom': '1rem'}} />
          <small style={{'color': '#e0eee2', 'fontSize': '0.8rem', 'textAlign': 'center'}}>
            © 2024 Copyright GitBook INC. 440 N Barranca Ave #7171, Covina, CA
            91723, USA. EIN: 320502699
          </small>
        </div>
        <div className='d-flex gap-3 mx-auto' style={{'alignItems': 'center'}}>
          <img src={github_icon} alt="" className='img-footer' />
          <img src={github_icon} alt="" className='img-footer' />
          <img src={linkedin_icon} alt="" className='img-footer' />
          <img src={youtube_icon} alt="" className='img-footer' />
        </div>
      </div>
    </section>
  );
};
export default Footer;
