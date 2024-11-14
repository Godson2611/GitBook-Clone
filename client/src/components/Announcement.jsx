import stars from "../assets/stars_icon.svg"

import '../styles/style.css';

const Announcement = () => {

    return (
        <div className="announcement-box full-width">
            <p>
                <img src={stars} alt="" />
                <span>New in GitBook: </span>Revamped Documentation
            </p>
        </div>
    )
}

export default Announcement;
