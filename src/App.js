import TheDrawer from "./components/TheDrawer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components used
// drawer component from material UI
// menu component from ant design

function Home() {
  return <div>Home</div>;
}

function Layout() {
  return <div>Layout</div>;
}

function A() {
  return <div>A</div>;

}
function B() {
  return <div>B</div>;

}
function C() {
  return <div>C</div>;

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
            <Route path="/thedrawer/a" element={<A />} />
            <Route path="/thedrawer/b" element={<B />} />
            <Route path="/thedrawer/c" element={<C />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
