import Mengundang from "./Mengundang";
import bwah from "../assets/Img/bwah.png";
import btas from "../assets/Img/batas.png";

export default function Mengundangsection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        sm:px-6
        lg:px-8
        py-24
        md:py-32
      "
    >
      {/* Background Top Floral */}
                 <div className="absolute top-0 left-0 w-full">
                   <img
                     src={btas} 
                     alt="floral"
                     className=" w-full   md:h-40
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

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center  ">
       <h2
            className="
              mt-4
              font-serif
              text-5xl
              md:text-6xl
              text-[#37558D]
              font-bold
            "
          >
            Turut Mengundang
          </h2>

        <p
          className="
            mt-3
            text-sm
            md:text-base
            text-gray-600
            font-serif 
            font-semibold
          "
        >
          Dengan segala hormat kami turut mengundang keluarga besar
          dari kedua mempelai.
        </p>
      </div>

      {/* Content */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-10
          relative
          z-10
        "
      >
        <Mengundang
          title="Dari Mempelai Pria"
          deskripsi={
            <ol className="list-decimal pl-5 space-y-2 text-white font-serif font-semibold">
              <li>Bpk. KH. Jaenal Abidin (Sesepuh Ponpes Nurul Huda)</li>
    <li>Bpk. Ust. Uus</li>
    <li>Bpk. Dadang Saputra (Kepala Desa Padajaya)</li>
    <li>Bpk. Aman (Ua)</li>
    <li>Bpk. Agus (Paman)</li>
    <li>Ibu Neng Alin (Kakak)</li>
    <li>Ibu Reni Restu Utami (Kakak)</li>
    <li>Ibu Ai Siti Rohaeti (Kakak)</li>
    <li>Ibu Eka Restu Senja (Kakak)</li>
            </ol>
          }
        />

        <Mengundang
          title="Dari Mempelai Wanita"
          deskripsi={
            <ol className="list-decimal pl-5 space-y-2  text-white font-serif font-semibold">
               <li>Keluarga Besar Bapak Jeje (Alm.) & Ibu Lilis (Almh.)</li>
    <li>Keluarga Besar Bapak Ombi & Umi Cucum (Almh.)</li>
    <li>Bapak Yayan Karnayan (Paman)</li>
    <li>Bapak Saefulloh (Paman)</li>
    <li>Endang Kamaludin (Kakak)</li>
    <li>M. Irfan Jafar Sidik (Kakak)</li>
    <li>Bapak H. Mamad M. Jaelani, S.Ag. (Kakek)</li>
    <li>Bapak H. Ujang Iskandar (Ua)</li>
    <li>Bapak Solihin (Paman)</li>
    <li>Keluarga Bapak Bunyamin & Ibu Didah</li>
    <li>Bapak Pepen (Paman)</li>
    <li>Bapak Ade (Paman)</li>
    <li>Bapak Imam Darmawan (Kakak)</li>
    <li>Bapak Deden Iskandar (Kakak)</li>
            </ol>
          }
        />
      </div>
    </section>
  );
}