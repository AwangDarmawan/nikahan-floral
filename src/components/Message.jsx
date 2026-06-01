import  { useEffect, useState } from 'react'
import { addpesan, DeletePesan, getData } from '../Service/Api'
import { toast } from "react-toastify";
import btas from "../assets/Img/batas.png"


function Message() {
 
  const [lihatData, setLihatData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: '',
  });

 
 


const FetchData = async () => {
  try {
    const ResultData = await getData();
    console.log("ResultData:", ResultData);

    // kalau array langsung
    if (Array.isArray(ResultData)) {
      setLihatData(ResultData);
    } 
    // kalau dibungkus object dengan key wedding
    else if (ResultData && Array.isArray(ResultData.wedding)) {
      setLihatData(ResultData.wedding);
    } 
    // fallback kosong
    else {
      setLihatData([]);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    setLihatData([]);
  }
};


useEffect(() => {
  FetchData();
}, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    
       if (!formData.name || !formData.message || !formData.attendance) {
        toast.error("Semua data harus diisi!");
        return; 
      }

    try {
      const response = await addpesan(formData);
      console.log(response);  
      FetchData();
      setFormData({ name: '', message: '', attendance: '' });
    } catch (error) {
    
      console.error("Error:", error);
    }
  };

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};




const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini? ");
  if (!confirmDelete) {
    return; 
  }

  try {
    await DeletePesan(id); 
    FetchData(); 
    alert("Data berhasil dihapus!");
  } catch (error) {
    console.error("Error deleting message:", error);
    alert("Terjadi kesalahan saat menghapus data!");
  }
};


  return (
    <>
     <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-7">
     <div className="absolute top-0 left-0 w-full">
                 <img
                   src={btas}
                   alt="floral"
                   className="w-full
     
      md:h-30
      lg:h-52
      xl:h-64
      object-cover"
                 />
               </div>
         
      <div className="max-w-3xl mx-auto text-[#3E5C93]  shadow-md rounded-xl p-6">
        {/* Title */}
      
              <div
  data-aos="fade-up"
  className="max-w-2xl mx-auto text-center"
>
  <h2
    data-aos="fade-down-right"
            className="
            text-center
           text-[#3E5C93] 
            font-bold
            text-4xl
            md:text-5xl
            mb-14
            font-serif"
  >
    Katakan Sesuatu 
  </h2>
</div>
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} relative>
          {/* Name Input */}
          <div className='relative'>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              *Nama
            </label>
            <input
              type="text"
            id="name"
            name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none text-black  dark:text-black font-Montserrat"
              placeholder="Your Name"
            />
          </div>

          {/* Message Input */}
          <div className='relative'>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700  mb-2">
              *Pesan
            </label>
            <textarea
              id="message"
           
            name="message"
              onChange={handleInputChange}
              rows="3"
              value={formData.message}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none font-Montserrat dark:text-black " 
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Attendance Options */}
          <div className='relative'>
            <label className="block text-sm font-medium text-gray-700  mb-2">
              *Kehadiran
            </label>
            <div className="flex justify-between">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleInputChange}
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="maybe"
                 
                checked={formData.attendance === 'maybe'}
                onChange={handleInputChange}
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">Maybe</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                checked={formData.attendance === 'no'}
                onChange={handleInputChange}
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center relative">
            <button
              type="submit"
              className="bg-[#3E5C93]  text-white px-6 py-2 rounded-lg shadow-md hover:bg-gold transition duration-300 font-Montserrat"
            >
              Kirim
            </button>
          </div>
        </form>

        {/* Message List */}
      
        <div className="mt-8 ">
          <h3 className="text-lg text-[#3E5C93] font-bold mb-4">Messages</h3>
          <ul className="space-y-4 max-h-80 overflow-y-auto"  >
            
          {lihatData.map((item) => (
           
            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg" key={item.id}>
              <div >
                <p className="text-sm font-medium text-gray-700 ">{item.name}</p>
                <p className="text-sm text-gray-500">{item.message}</p>
              </div>
              
              
            <button
             onClick={() => handleDelete(item.id)}
              className={`text-sm px-3 py-1 rounded-full relative ${
                item.attendance === "yes"
                  ? "bg-green-100 text-green-700"
                  : item.attendance === "maybe"
                  ? "bg-yellow-100 text-yellow-700"
                  : item.attendance === "no"
                  ? "bg-red-100 text-red-700"
                  : ""
              }`}
            >
              {item.attendance}
            </button>
            </li>
         ))}
            </ul>
        
       </div >
       </div>
       </section>
    </>
  )
}

export default Message
