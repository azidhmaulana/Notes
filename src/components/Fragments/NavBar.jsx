import Title from "../Elements/Title";
import SearchForm from "../Elements/SearchBar";

const NavBar = (props) => {
  const { classname, placeholder, id, type, title, onChange } = props;
  return (
    <>
      <Title classname="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        {title}
      </Title>
      <div className="flex md:order-2">
        <SearchForm
          placeholder={placeholder}
          classname={classname}
          id={id}
          type={type}
          onChange={onChange}
        />
      </div>
    </>
  );
};
export default NavBar;
