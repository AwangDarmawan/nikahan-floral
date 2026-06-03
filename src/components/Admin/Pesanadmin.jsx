import { useEffect, useState } from "react";
import {
  getData,
  deleteData,
  deleteAllData,
} from "../../service/Api";
import Bunga from "../Bunga";
import { Trash2 } from "lucide-react";

function Pesanadmin() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET DATA
  const fetchData = async () => {
    try {
      const data = await getData();
      setDatas(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE SATU
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus pesan ini?"
      );

      if (!confirmDelete) return;

      await deleteData(id);

      setDatas((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus pesan");
    }
  };

  // DELETE SEMUA
  const handleDeleteAll = async () => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus semua pesan?"
      );

      if (!confirmDelete) return;

      await deleteAllData();

      setDatas([]);
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus semua pesan");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-4 md:px-6 py-24">
      <Bunga />

      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#3E5C93]
              font-serif
            "
          >
            Lihat Pesan
          </h2>
        </div>

        {/* Statistik */}
        <div className="flex flex-col md:flex-row justify-between gap-3 mb-5">
          <span
            className="
              bg-[#3E5C93]
              text-white
              px-4
              py-2
              rounded-lg
              text-center
            "
          >
            Total Pesan : {datas.length}
          </span>

          <button
            onClick={handleDeleteAll}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            Hapus Semua
          </button>
        </div>

        {/* List */}
        <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2">
          {loading ? (
            <div className="text-center py-10">
              Loading...
            </div>
          ) : datas.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Belum ada pesan
            </div>
          ) : (
            datas.map((item) => (
              <div
                key={item.id}
                className="
                  bg-pink-50
                  border
                  border-pink-100
                  rounded-xl
                  p-4
                  shadow-sm
                "
              >
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">
                      {item.nama}
                    </h4>

                    <p className="text-gray-600 mt-2">
                      {item.pesan}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`
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

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-3
                        py-1
                        rounded-lg
                        text-xs
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Pesanadmin;