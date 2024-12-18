import NavBar from "../Fragments/NavBar";

function NavBarLayout({ onChange }) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavBar
          title="Notes"
          placeholder="Cari Catatanmu disini ..."
          id="search-navbar"
          type="text"
          onChange={onChange}
          classname="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </nav>
  );
}

export default NavBarLayout;
