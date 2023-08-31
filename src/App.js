import TheDrawer from "./components/TheDrawer.js";
import TheDrawer2 from "./components/TheDrawer2.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// components used
// drawer component from material UI
// menu component from ant design

// remove shadow
// remove pink background, we want white
// look into routing within the navigation menu

function Home() {
  return <div>Home</div>;
}

function Layout() {
  return <div>Layout</div>;
}

export default function App() {
  return (
    <div>
      {/* <TheDrawer /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="/thedrawer" element={<TheDrawer />} />
            <Route path="/thedrawer2" element={<TheDrawer2 />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
