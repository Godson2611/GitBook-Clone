import { testimonialData } from "../content/testimonialContent";

const Testimonial = () => {
    return (
        <div className="testimonial-area">
            {testimonialData.map((data, index) => (
                <div key={index} className="card">
                    <div className="card-header">
                        <img src={data.profilePic} alt={data.name} />
                        <h4>{data.name}</h4>
                    </div>
                    <p>{data.testimonail}</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;
