import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-light-blue mt-20">
      <div className="flex flex-col mx-auto w-max justify-center space-y-0">
        <div className="flex flex-row mx-auto">
          <img
            className="h-36"
            src="/RibbitAndRoo.png"
            alt="RIBBIT &amp; ROO"
          />
        </div>
        <div className="flex flex-row mx-auto space-x-8 text-gray-400">
          <RiFacebookCircleLine className="text-3xl hover:text-primary-green cursor-pointer" />
          <RiInstagramLine className="text-3xl hover:text-primary-green cursor-pointer" />
          <RiMailLine className="text-3xl hover:text-primary-green cursor-pointer" />
          <RiPhoneLine className="text-3xl hover:text-primary-green cursor-pointer" />
        </div>
        <div className="flex justify-center pt-8">
          <p className="text-gray-400 text-lg">Ribbit &amp; Roo ©</p>
        </div>
        <div className="flex flex-row space-x-8 text-gray-400 pb-8">
          <a href="/terms-and-conditions" className="hover:text-primary-green">
            Terms
          </a>
          <a href="/privacy-policy" className="hover:text-primary-green">
            Privacy Policy
          </a>
          <a href="/contact-us" className="hover:text-primary-green">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
