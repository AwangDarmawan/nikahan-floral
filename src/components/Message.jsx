
import { useEffect, useState } from "react";
import { createData, getData } from "../service/Api";
import Bunga from "./Bunga";



function Message() {
  const [datas, setDatas] = useState([]);
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  

  const fetchData = async () => {
  try {
    const data = await getData();
    setDatas(data || []);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    

    fetchData();
  }, []);

   // Simpan data
  const handleSubmit = async () => {
    try {
      if (!nama || !pesan || !kehadiran) {
        alert("Lengkapi semua data terlebih dahulu");
        return;
      }

      const payload = {
        nama,
        pesan,
        kehadiran,
      };
      
    
      await createData(payload);

      // refresh data
      await fetchData();

      // reset form
      setNama("");
      setPesan("");
      setKehadiran("");

      // refresh data
      await getData();

      alert("Pesan berhasil dikirim");
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim pesan");
    }
  };
  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-36">
      
     <Bunga />

      {/* Content */}
      <div className="max-w-3xl w-full mx-auto text-[#3E5C93] shadow-md rounded-xl p-6 bg-white z-10">
        
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
              font-serif
            "
          >
            Message
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Nama */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm  text-[#3E5C93] font-serif font-semibold"
            >
              *Nama
            </label>

            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukan Nama"
              className="
                w-full
                px-4
                py-2
                border
                rounded-lg
                outline-none
                text-[#3E5C93]
              "
            />
          </div>

          {/* Pesan */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#3E5C93] font-serif"
            >
              *Pesan
            </label>

            <textarea
              rows="message"
              name="message"
              rows="3"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesan anda"
              className="
                w-full
                px-4
                py-2
                border
                rounded-lg
                outline-none
                text-[#3E5C93]
              "
            />
          </div>

          {/* Kehadiran */}
           {/* <div className="flex gap-6"> */}
            
            <div className=" sm:flex-row sm:items-center gap-4 sm:gap-6">
            <label className=" text-[#3E5C93] font-serif font-semibold">
            *Kehadiran
           </label>

            <div className="flex flex-wrap gap-4 font-serif italic ">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="kehadiran"
                  value="Ya"
                  checked={kehadiran === "Ya"}
                  onChange={(e) =>
                    setKehadiran(e.target.value)
                  }
                />
                <span>Ya</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="kehadiran"
                  value="Mungkin"
                  checked={kehadiran === "Mungkin"}
                  onChange={(e) =>
                    setKehadiran(e.target.value)
                  }
                />
                <span>Mungkin</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="kehadiran"
                  value="Tidak"
                  checked={kehadiran === "Tidak"}
                  onChange={(e) =>
                    setKehadiran(e.target.value)
                  }
                />
                <span>Tidak</span>
              </label>
            </div>
          {/* Tombol */}
          <div className="text-center">
            <button
             onClick={handleSubmit}
              type="button"
              className="
                 bg-[#3E5C93]
                hover:bg-blue-800
                text-white
                px-6
                py-2
                rounded-lg
                shadow-md
              "
            >
              Kirim
            </button>
          </div>
        </div>
        </form>

      {/* List Pesan */}
<div className="mt-8">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-bold text-[#3E5C93]">
      Pesan
    </h3>

    <span className="bg-[#3E5C93] text-white px-3 py-1 rounded-full text-sm">
      {datas.length} Pesan
    </span>
  </div>

  <div
    className="
      max-h-[400px]
      overflow-y-auto
      pr-2
      space-y-4
    "
  >
    {datas.length === 0 ? (
      <div className="text-center py-8 text-gray-500">
        Belum ada pesan
      </div>
    ) : (
      datas.map((item) => (
        <div
          key={item.id}
          className="
            bg-pink-50
            rounded-xl
            p-4
            shadow-sm
            border
            border-pink-100
          "
        >
          <div className="flex justify-between items-start gap-3">
            <div className="flex-1">
              <p className="font-semibold text-gray-800 break-words">
                {item.nama}
              </p>

              <p className="mt-2 text-sm text-gray-600 break-words">
                {item.pesan}
              </p>
            </div>

            <span
              className={`
                whitespace-nowrap
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                ${
                  item.kehadiran === "Ya"
                    ? "bg-green-100 text-green-700"
                    : item.kehadiran === "Mungkin"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {item.kehadiran}
            </span>
          </div>
        </div>
      ))
    )}
  </div>
</div>
</div>
</section>

         
         
  );
}

export default Message;

