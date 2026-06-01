import bwah from "../assets/Img/bwah.png"
import btas from "../assets/Img/batas.png"

function Kata() {
  return (
    <>
         <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
              {/* Background Top Floral */}
              <div className="absolute top-0 left-0 w-full">
                <img
                  src={btas}
                  alt="floral"
                      className="w-full md:h-40
      lg:h-30
      xl:h-50
      object-cover"
                />
              </div>
        
              <div className="absolute bottom-0 left-0 w-full">
                <img
                  src={bwah}
                  alt="floral"
                      className=" w-full md:h-40
      lg:h-30
      xl:h-50
      object-cover"
                />
              </div>

              
      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Initial */}
         <div
       
        className="
        relative
        flex
       justify-center
       items-center
       h-[60px]
       md:h-[220px]
       gap-4
       "
       >
  <span data-aos="fade-down-right"
    className="  bottom-10 xs:bottom-0
      font-allura
      text-[110px]
      md:text-[180px]
      
      text-black
      relative
      z-10
    "
  >
    A
  </span>
  

  <span data-aos="fade-up-right"
    className="
      font-allura
      text-[110px]
      md:text-[180px]
      text-black
      -ml-6
      md:-ml-10
    "
  >
    N
  </span>
  </div>
    <p className="mt-12 text-sm md:text-base text-gray-700 font-serif font-semibold">
         "Bismillahirrahmanirrahim. Ya Allah, dengan segala kesucian hati, kami memohon ridho-Mu untuk menuju sunnah Rasul-Mu, membentuk keluarga yang sakinah, mawaddah, warahmah. Kami mengundang Bapak/Ibu/Saudara/i untuk hadir memberikan doa restu pada pernikahan putra-putri kami.
        </p>

  </div>
  
  </section>
    </>
  )
}

export default Kata
