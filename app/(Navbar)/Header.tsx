import AppLogo from './AppLogo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header>
      <div
        data-theme="black"
        className="items-center flex flex-col md:px-5 py-4 md:py-3 md:flex-row md:justify-between
      rounded-b-2xl bg-gradient-to-bl from-violet-400 to-indigo-500"
      >
        <AppLogo />

        <div className="max-w-2xl flex flex-1 justify-end items-center">
          <NavLinks />

          {/* <form className="flex gap-2 items-center">
            <MagnifyingGlassIcon
              className="w-6 h-6 translate-x-11"
              color="white"
            />

            <NavInput />
          </form> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
