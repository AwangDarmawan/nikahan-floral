import Mengundang from "./Mengundang";

import Bunga from "./Bunga";
import Footer from "./Footer";

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
        py-56
        md:py-32
      "
    >
      {/* Background Top Floral */}
          <Bunga/>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center  ">
       <h2
             data-aos="fade-down-right"
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
        titleClassName="text-white"
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
        className="text-white"
         titleClassName="text-white"
          title="Dari Mempelai Wanita"
          deskripsi={
            <ol className="list-decimal pl-5 space-y-2  text-white font-serif font-semibold">
               <li>Keluarga Besar Bapak Jeje (Alm.) & Ibu Lilis (Almh.)</li>
    <li>Keluarga Besar Bpk Ombi &  Ibu Umi Cucum (Almh.)</li>
    <li>Bpk Yayan Karnayan (Paman)</li>
    <li>Bpk Saefulloh (Paman)</li>
    <li>Endang Kamaludin (Kakak)</li>
    <li>M. Irfan Jafar Sidik (Kakak)</li>
    <li>Bpk H. Mamad M. Jaelani, S.Ag. (Kakek)</li>
    <li>Bpk H. Ujang Iskandar (Ua)</li>
    <li>Bpk Solihin (Paman)</li>
    <li>Keluarga Bpk Bunyamin & Ibu Didah</li>
    <li>Bpk Pepen (Paman)</li>
    <li>Bpk Ade (Paman)</li>
    <li>Bpk Imam Darmawan (Kakak)</li>
    <li>Bpk Deden Iskandar (Kakak)</li>
    <li>Bpk Dede (Paman)</li>
    <li>Bpk Muhidin (Paman)</li>
    <li>Bpk Permana Ruslandi (Paman)</li>
  </ol>
          }
        />
      </div>

      <Footer/>
    </section>
  );
}