import { useGlobalContext } from './context';
import { Theme, Button } from 'react-daisyui';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <BsFillSunFill className="text-yellow-400" />
        ) : (
          <BsFillMoonFill className="text-gray-500" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
