// Importing the 'useState' hook from the 'react' library
import { useState } from "react";

// Importing the 'Header' component from the specified path
import Header from "./components/Header";

// Importing the 'SunHeader' component from the specified path
import SunHeader from "./components/SunHeader.jsx";

// Importing the 'MenuContext' from the specified path
import { MenuContext } from "./context.js";

// Importing the 'Tabs' component from the specified path
import Tabs from "./components/Tabs.jsx";

// Importing the 'Widgets' component from the specified path
import Widgets from "./components/Widgets.jsx";

// Functional component named 'App'
const App = () => {
  // Using the 'useState' hook to create a state variable 'menu' with an initial value of 'false'
  const [menu, setMenu] = useState(false);

  // Returning the JSX structure
  return (
    <>
      {/* Providing the 'MenuContext' to its descendants with the current value of 'menu' and 'setMenu' */}
      <MenuContext.Provider value={{ menu, setMenu }}>
        {/* Rendering the 'Header' component */}
        <Header />

        {/* Rendering the 'SunHeader' component */}
        <SunHeader />

        {/* Rendering the 'Tabs' component */}
        <Tabs />

        {/* Rendering the 'Widgets' component */}
        <Widgets />
      </MenuContext.Provider>
    </>
  );
};

// Exporting the 'App' component as the default export of this module
export default App;
