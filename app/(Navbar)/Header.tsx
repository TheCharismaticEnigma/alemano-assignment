import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AppLogo from '../AppLogo';
import ThemeSwitchButton from './ThemeSwitchButton';
import NavInput from './NavInput';

const Header = () => {
  return (
    <header>
      <div
        data-theme="black"
        className="items-center flex flex-col md:px-5 py-4 md:py-3 md:flex-row md:justify-between
      rounded-b-2xl bg-gradient-to-br from-green-300 to-gray-900"
      >
        <AppLogo />

        <div className="max-w-2xl flex flex-1 justify-evenly md:justify-end md:gap-12 items-center gap-8">
          <form className="flex gap-2 items-center">
            <MagnifyingGlassIcon
              className="w-6 h-6 translate-x-11"
              color="white"
            />

            <NavInput />
          </form>

          {/* Optional Button To Toggle Theme */}
          {/* <ThemeSwitchButton /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
