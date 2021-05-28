type HProps = {
  content: string;
};

const H3 = ({ content }: HProps) => {
  return <h3 className="text-3xl uppercase text-white pb-8">{content}</h3>;
};

export { H3 };
