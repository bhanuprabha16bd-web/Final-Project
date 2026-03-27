import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <h1>Hi, I'm Developer</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Home;