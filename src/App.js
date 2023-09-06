import TheDrawer from "./components/TheDrawer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <div>Home</div>;
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
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/thedrawer" element={<TheDrawer />} />
            <Route path="/thedrawer/a" element={<A />} />
            <Route path="/thedrawer/b" element={<B />} />
            <Route path="/thedrawer/c" element={<C />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
