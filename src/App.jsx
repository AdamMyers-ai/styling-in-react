// src/App.jsx
import "./App.css";
// Later on, we'll import button components here
import ButtonNormalCss from "./components/example-1-normal-css/Button.jsx";
import ButtonInlineCss from "./components/example-2-inline-css/Button";
import ButtonStyledComponents from "./components/example-3-styled-components/Button";
import ButtonCssModules from "./components/example-4-css-modules/Button";
import SassyButton from "./components/example-5-sass/Button";
import TailwindButton from "./components/example-6-tailwind/Button";

const App = () => {
  return (
    <>
      <ButtonNormalCss buttonText={"Click Me"} />
      <ButtonInlineCss buttonText={"Click Me"} />
      <ButtonStyledComponents buttonText={"Click Me"} />
      <ButtonCssModules buttonText={"Click Me"} />
      <SassyButton buttonText={"Click Me"} />
      <TailwindButton buttonText={"Click me"} />
    </>
  );
};

export default App;
