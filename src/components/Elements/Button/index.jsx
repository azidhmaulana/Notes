const Button = (props) => {
  const { children, classname, type, onClick } = props;
  return (
    <button className={classname} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
