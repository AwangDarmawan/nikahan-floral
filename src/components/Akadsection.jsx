import Akad from "./Akad";

import Bunga from "./Bunga";


export default function Akadsection() {
  return (
        <section className="relative min-h-screen  overflow-hidden bg-white flex items-center justify-center px-7 py-3">
         {/* Background Top Floral */}
          <Bunga/>
        
      <div
        className="
          max-w-4xl
          mx-auto
          space-y-10
        "
      >
        <Akad
          title="Akad Nikah"
          date="Minggu, 04 Juni 2026"
          time="08.00 WIB"
          location="Kp. Halimun, RT003/RW004, Desa Warudoyong, Kec. Cikalongkulon, Kab. Cianjur"
          mapsLink="https://www.google.com/maps?q=-6.7095556,107.2343388&z=17&hl=id"
        />

        <Akad
          title="Resepsi"
          date="Minggu, 05 Juli 2026"
          time="08.00 WIB s/d Selesai"
          location="Kp. Halimun, RT003/RW004, Desa Warudoyong, Kec. Cikalongkulon, Kab. Cianjur"
          mapsLink="https://www.google.com/maps?q=-6.7095556,107.2343388&z=17&hl=id"
        />
      </div>
    </section>
  );
}