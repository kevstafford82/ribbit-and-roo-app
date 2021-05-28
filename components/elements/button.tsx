type ButtonProps = {
  content: string;
  url: string;
};

const Button = ({ content, url }: ButtonProps) => {
  return (
    <a className=" text-white bg-primary-green hover:bg-light-blue" href={url}>
      {content}
    </a>
  );
};

export { Button };
