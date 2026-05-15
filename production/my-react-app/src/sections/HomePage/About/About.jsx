import Product_industry from "./product-industry";
import About_service from "./about-services";
import HeroVideo from "../../../web-components/herovideo";
function About() {
    return (
        <section className="about">
            <><About_service/></>
            <><Product_industry/></>
            <section className="HV">
          <><HeroVideo/></>
        </section></section>
    )
}
export default About;