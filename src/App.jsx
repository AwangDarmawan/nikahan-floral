import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./pages/Cover";
import Home from "./pages/Home";
import Adminpage from "./pages/AdminPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Adminpage/>} />
        <Route path="/:nama" element={<Cover/>} />
         <Route path="/undangan" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;