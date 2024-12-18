const Content = (props) => {
  const { body } = props;
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400 ">{body}</p>
  );
};
export default Content;
