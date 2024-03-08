import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import MyCollection from "./pages/MyCollection";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<MyCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
