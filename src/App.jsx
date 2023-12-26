import { useState } from "react";
import Header from "./components/Header";
import SunHeader from "./components/SunHeader.jsx";
import { MenuContext } from "./context.js";
import Tabs from "./components/Tabs.jsx";
import Widgets from "./components/Widgets.jsx";

const App = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <MenuContext.Provider value={{ menu, setMenu }}>
        <Header />
        <SunHeader />
        <Tabs />
        <Widgets />
      </MenuContext.Provider>
    </>
  );
};

export default App;