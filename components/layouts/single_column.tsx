type SingleColumnProps = {
  children: React.ReactNode;
};

const SingleColumn = ({ children }: SingleColumnProps) => {
  return <div className="container mx-auto px-32">{children}</div>;
};
export default SingleColumn;
