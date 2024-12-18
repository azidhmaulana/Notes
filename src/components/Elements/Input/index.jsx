import Input from "./Input";

const InputForm = (props) => {
  const { id, type, placeholder, classname, value, onChange } = props;
  return (
    <div className="mb-6">
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        classname={classname}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
