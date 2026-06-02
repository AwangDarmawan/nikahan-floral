
import Bunga from "./Bunga"

function Kata() {
  return (
    <>
         <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
              {/* Background Top Floral */}
              <Bunga/>

              
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
      
      text-[#3E5C93]
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
      text-[#3E5C93]
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
