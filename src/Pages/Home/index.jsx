import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Topbar from "../../Component/Headers/Topbar";
import Header from "../../Component/Headers";
import HomeTowHero from "../../Component/Heros/HomeTowHero";
import Home2PopularCourse from "../../Component/Course/Home2PopularCourse";
import FeatureHome2 from "../../Component/Features/FeatureHome2";
import Testimonial from "../../Component/Testimonials/Testimonial";
import Pricing from "../../Component/Pricing/Pricing";
import FooterHome2 from "../../Component/Footer/FooterHome2";
import GotoTop from "../../Component/GotoTop";

const Home = () => {
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
        <Topbar />
        <Header
          className="header-02"
          logo="assets/images/main_logo.png"
          search={true}
        />
        <HomeTowHero />
        <Home2PopularCourse />
        <FeatureHome2 />
        <Testimonial />
        <Pricing />
        <FooterHome2 />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home;
