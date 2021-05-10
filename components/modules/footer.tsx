import P from "../elements/p";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-20">
      <div className="flex flex-col mx-auto w-max justify-center ">
        <div className="mb-8">
          <img
            className="h-32 w-auto"
            src="/RibbitAndRoo.png"
            alt="RIBBIT &amp; ROO"
          />
        </div>
        <div></div>
        <div className="flex justify-center pt-20">
          <P>Ribbit &amp; Roo ©</P>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
