import { Button } from "../elements";

type IconColumnProps = {
  heading: string;
  content: string;
  buttonText: string;
  buttonURL: string;
};

const IconColumn = ({
  heading,
  content,
  buttonText,
  buttonURL,
}: IconColumnProps) => {
  return (
    <div>
      {/* icon */}
      <h3 className="text-3xl uppercase text-white pb-8">{heading}</h3>
      <Button content={buttonText} url={buttonURL}></Button>
      <p>{content}</p>
    </div>
  );
};

export { IconColumn };
