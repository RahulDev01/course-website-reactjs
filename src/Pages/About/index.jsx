import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import Testimonial from "../../Component/Testimonials/Testimonial";
import GotoTop from "../../Component/GotoTop";
import { AboutComponent } from "../../Component/AboutComponent/AboutComponent";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/main_logo.png" joinBtn={true} />
        <Banner title="About Classic" background="assets/images/.jpg" />
        <AboutComponent />
        <Testimonial />
        <Footer getStart={false} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About;
