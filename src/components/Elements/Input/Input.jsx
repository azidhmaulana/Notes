const Input = (props) => {
  const {
    classname = "text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1",
    type,
    id,
    placeholder,
    value,
    onChange,
  } = props;
  return (
    <input
      id={id}
      type={type}
      className={classname}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;