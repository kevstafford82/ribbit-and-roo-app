type TextBlockProps = {
  heading: string;
  content: string;
};

const TextBlock = ({ heading, content }: TextBlockProps) => {
  return (
    <section className=" bg-primary-green">
      <div className="p-20">
        <div className="flex flex-row mx-auto justify-center">
          <h3 className="text-3xl uppercase text-white pb-8">{heading}</h3>
        </div>
        <p>{content}</p>
      </div>
    </section>
  );
};

export { TextBlock };
