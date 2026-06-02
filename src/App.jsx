import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./pages/Cover";
import Home from "./pages/Home";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover/>} />
        <Route path="/:nama" element={<Cover/>} />
         <Route path="/undangan" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;