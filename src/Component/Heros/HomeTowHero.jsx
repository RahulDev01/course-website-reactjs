import { Link } from "react-router-dom";

const HomeTowHero = () => {
  return (
    <section
      className="hero-banner-2"
      style={{ backgroundImage: "url(assets/images/home2/banner.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="banner-thumb">
              <img src="assets/images/home2/layer.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="hero-content">
              <div className="sub-heading">Online Education</div>
              <h2>Learn on your Class shedule.</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul>
                <li>
                  <i className="icon_check_alt2"></i>Quality Teachers
                </li>
                <li>
                  <i className="icon_check_alt2"></i>Get Certificate
                </li>
                <li>
                  <i className="icon_check_alt2"></i>Best Curriculam
                </li>
              </ul>
              <Link to="/course" className="bisylms-btn-2">
                Ready to Get Started?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTowHero;
