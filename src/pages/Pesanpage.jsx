import Pesanadmin from "../components/Admin/Pesanadmin"
import NavbarAdmin from "../components/Admin/Navbaradmin"


function Pesanpage() {
  return (
    <>
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        <Pesanadmin />
      </div>
      
    </>
  )
}

export default Pesanpage
