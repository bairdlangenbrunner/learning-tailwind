import Header from "./components/Header";
import Main from "./components/Main";

// in root of vite react project, create .env file, paste:
// VITE_ANTHROPIC_ENV_KEY=FULL KEY (without quotes)
console.log(import.meta.env.VITE_ANTHROPIC_ENV_KEY);

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
