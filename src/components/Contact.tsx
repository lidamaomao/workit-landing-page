import Avatar from "../assets/images/image-founder.webp";

const Contact = () => {
  return (
    <div className="contact bg-white p4 relative pt-84 after:content-empty after:block after:w-[102%] after:h-[4rem] after:bg-ghostWhite after:absolute after:top-[-2rem] after:left-[-1%] after:rounded-b-[100%] sm:flex sm:justify-end sm:pt-72 md:pr-8 xl:pr-60 lg:h-700px">
      <img
        src={Avatar}
        alt="founder image"
        className="w-[16rem] absolute left-[3.5rem] top-[8rem] md:w-22rem md:top-5rem lg:left-50% lg:translate-x-[-100%] lg:top-4rem"
      />
      <div className="contact-info md:lg:h-313px text-center relative bg-dark-purple text-ghostWhite p8 sm:w-[32rem] md:w-60% lg:max-w-730px lg:absolute lg:right-[50%] lg:translate-x-[80%]">
        <h2 className="heading-m mb-4 ">Be the first to test</h2>
        <div className="content body-font leading-[1.75rem]">
          Hi,I'm Louis Graham,the founder of the company.Book a demo call with
          me to become a beta tester for our app and kickstart your
          company.Apply for access below and I'll be in touch to schedule a
          call.
        </div>
        <a
          href="#"
          className="inline-block my-8 bg-eucaplyptus p4 text-darkPurple hover:text-eucaplyptus hover:border-eucaplyptus hover:border-1 hover:border-solid hover:bg-dark-purple"
        >
          Apply for access
        </a>
      </div>
    </div>
  );
};

export default Contact;
