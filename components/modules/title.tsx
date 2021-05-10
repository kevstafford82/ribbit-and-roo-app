type TitleProps = {
  heading: string;
  subheading: string;
};

const Title = ({ heading, subheading }: TitleProps) => {
  return (
    <section className="h-96 mb-8">
      <div className="h-full w-full bg-cover bg-black bg-opacity-75">
        <div className="h-full w-full bg-cover bg-fixed bg-center bg-hero-image p-20 pt-48 text-white font-normal leading-loose uppercase">
          <h3 className="text-3xl">{heading}</h3>
          <p>{subheading}</p>
        </div>
      </div>
    </section>
  );
};

export { Title };
