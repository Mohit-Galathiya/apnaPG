import Home from "./Home";
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/guest" element={<Home />} />
        <Route path="/owner" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
