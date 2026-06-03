import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./pages/Cover";
import Home from "./pages/Home";
import Adminpage from "./pages/Adminpage";
import Pesanpage from "./pages/Pesanpage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin */}
        <Route path="/" element={<Adminpage/>} />
           <Route path="/admin/pesan" element={<Pesanpage/>} />
           {/* Users */}
        <Route path="/:nama" element={<Cover/>} />
         <Route path="/undangan" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;