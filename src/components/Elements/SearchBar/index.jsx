import Icon from "./Icon";
import InputForm from "../Input";

const SearchForm = (props) => {
  const { classname, placeholder, id, type, onChange } = props;
  return (
    <div className="relative hidden md:block">
      <Icon />
      <InputForm
        type={type}
        id={id}
        classname={classname}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default SearchForm;
