import { useState } from "react";
import Header from "./components/Header";
import SunHeader from "./components/SunHeader.jsx";
import { MenuContext } from "./context.js";

const App = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <MenuContext.Provider value={{ menu, setMenu }}>
        <Header />
        <SunHeader />
      </MenuContext.Provider>
    </>
  );
};

export default App;