import { FC, useState } from "react";
import { DEFAULT_THEME, THEME } from "../../lib/constants/theme";
import Toggle from "../Toggle";

type TProps = {
  className?: string;
};

const themeFromLs = localStorage.getItem("theme") || DEFAULT_THEME;
document.documentElement.setAttribute("data-theme", themeFromLs);

const setDataTheme = (theme: THEME) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const ThemeSwitcher: FC<TProps> = ({ className }) => {
  const [theme, setTheme] = useState(themeFromLs);

  return (
    <div className={className}>
      <Toggle
        checked={theme !== DEFAULT_THEME}
        onClick={() => {
          const themeToggled = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

          setDataTheme(themeToggled);
          setTheme(themeToggled);
        }}
      />
    </div>
  );
};

export default ThemeSwitcher;
