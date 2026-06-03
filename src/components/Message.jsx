
import btas from "../assets/Img/batas.png";



function Message() {

  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-36">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-full">
        <img
          src={btas}
          alt="floral"
          className="
            w-full
            md:h-30
            lg:h-52
            xl:h-64
            object-cover
          "
        />
      </div>

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
            Pesan
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Nama */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              *Nama
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="
                w-full
                px-4
                py-2
                border
                rounded-lg
                outline-none
                text-black
              "
            />
          </div>

          {/* Pesan */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              *Pesan
            </label>

            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Write your message here..."
              className="
                w-full
                px-4
                py-2
                border
                rounded-lg
                outline-none
                text-black
              "
            />
          </div>

          {/* Kehadiran */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              *Kehadiran
            </label>

            <div className="flex justify-between">
              
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                />
                <span>Yes</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  value="maybe"
                />
                <span>Maybe</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                />
                <span>No</span>
              </label>

            </div>
          </div>

          {/* Tombol */}
          <div className="text-center">
            <button
              type="button"
              className="
                bg-[#3E5C93]
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

        </form>

        {/* List Pesan Dummy */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-[#3E5C93] mb-4">
            Pesan
          </h3>

          <ul className="space-y-4">
            
            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg">
              <div>
                <p className="font-medium text-gray-700">
                  Awang
                </p>

                <p className="text-gray-500">
                  Selamat menempuh hidup baru.
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Yes
              </span>
            </li>

            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg">
              <div>
                <p className="font-medium text-gray-700">
                  Deri
                </p>

                <p className="text-gray-500">
                  Semoga menjadi keluarga sakinah.
                </p>
              </div>

              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                No
              </span>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
}

export default Message;

