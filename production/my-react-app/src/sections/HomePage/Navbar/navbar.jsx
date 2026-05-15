import logo from "../../../assets/logo.png";
import { Contact, Sample } from "../../../components/Button";
 function Navbar() {
  return (
    <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
      <div className='nav-links'>
      <a href="/" className="whom">For whom</a>
      <a href="/" className="services">Services</a>
      <a href="/" className="work">Our work</a>
      <a href="/" className="resource">Resources</a>
      <a href="/" className="price">Pricing</a>
      </div>
      <div className="nav-actions">
      <Contact />
      <Sample className="sample"/></div>
      </nav>
  );
}

export default Navbar;