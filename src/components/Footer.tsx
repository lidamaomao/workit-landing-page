import logo from "../assets/images/logo-dark.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import Contact from "./Contact";

export const Footer = () => {
  return (
    <>
      <Contact />
      <footer className="bg-white flex flex-col justify-center items-center p10 lg:text-3xl">
        <img src={logo} alt="website logo" className="mb-8" />
        <div className="contact-link flex justify-around items-center w-[7rem]">
          <a href="#">
            <img src={facebookIcon} alt="contact facebook link" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="contact twitter link" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="contact instagram link" />
          </a>
        </div>
      </footer>
    </>
  );
};
