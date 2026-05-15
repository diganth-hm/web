import hero from "../../../assets/hero.mp4";
import { OurService } from "../../../components/Button"
function About_service(){
    return(
          <div className="about-services">
                <div className="about-left">
                    <h1 className="about-title">
                        Feature a brief<br />
                        overview of<br />
                        services<br />
                        showcase one or <br />
                        two featured</h1><br />
                   
                    <OurService />
                </div>
                <div className="about-video">
                    <video src={hero} autoPlay loop muted />

                </div>
            </div>
    )
}
export default About_service;