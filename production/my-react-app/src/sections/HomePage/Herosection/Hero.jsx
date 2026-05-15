import hero from "../../../assets/hero.mp4";
import {Team} from "../../../components/Button";
import Bulletin from "./Bulletin";
import FrameLines from "./FrameLines";
function Hero() {
    return (

        <section className="hero">
          
            <video autoPlay loop muted playsInline className="video">
                <source src={hero} type="video/mp4" />
            </video>
            <div className="hero-box">
                <FrameLines />
                <div className="hero-content">
                    <h1 className="title">YOUR</h1>
                    <h1 className="title">CREATIVE</h1>
                    <h1 className="title">PRODUCTION</h1>
                    <h1 className="title"> PARTNER</h1>
                </div>
                <Team/>
                <Bulletin />
                </div>
                  <div className="diagonal"></div>
            
        </section>
    );
}
export default Hero;