type NewType = {
  children: React.ReactNode;
  heading: string;
};

type ParagraphProps = NewType;

const Paragraph = ({ children, heading }: ParagraphProps) => {
  return (
    <>
      <h2 className="uppercase text-xl mb-4">{heading}</h2>
      <p className="mb-8">{children}</p>
    </>
  );
};
export default Paragraph;
