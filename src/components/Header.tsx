import logo from "../assets/images/logo-light.svg";
import leftBgSvg from "../assets/images/bg-pattern-1.svg";
import rightBgSvg from "../assets/images/bg-pattern-2.svg";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between px-4 pt-8">
        <h1>
          <img src={logo} alt="workit logo | Data tailored to your needs" />
        </h1>
        <a
          href="#"
          className="border-b-eucaplyptus border-b-solid hover:text-eucaplyptus"
        >
          Apply for access
        </a>
      </nav>
      <div className="hero-section text-center mt-16 relative pb-34">
        <h2 className="heading-l mb-10">
          Data{" "}
          <span className="b-b-4 border-b-solid border-b-eucaplyptus">
            tailored
          </span>{" "}
          to your needs
        </h2>
        <a
          href="#"
          className="inline-block bg-eucaplyptus p-3 text-dark-purple hover:text-eucaplyptus hover:border-eucaplyptus hover:border-1 hover:border-solid hover:bg-dark-purple"
        >
          Learn more
        </a>
      </div>
      <img
        src={leftBgSvg}
        alt="left background svg"
        className="hidden sm:inline-block absolute top-5rem left-[-135px] w-210px"
      />
      <img
        src={rightBgSvg}
        alt="right background svg"
        className="hidden sm:inline-block absolute top-10rem right-[-103px]"
      />
    </>
  );
};

export default Header;
