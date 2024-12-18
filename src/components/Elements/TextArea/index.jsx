import TextArea from "./TextArea";

const TextAreaForm = (props) => {
  const { placeholder, classname, value, onChange } = props;
  return (
    <div className="mb-6">
      <TextArea
        placeholder={placeholder}
        classname={classname}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaForm;
