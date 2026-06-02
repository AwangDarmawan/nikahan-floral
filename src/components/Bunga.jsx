import bwah from "../assets/Img/bwah.png"
import btas from "../assets/Img/batas.png"

export default function Bunga() {
  return (
    <>
      {/* Background Top Floral */}
            <div className="absolute top-0 left-0 w-full">
              <img
                src={btas}
                alt="floral"
                    className="w-full
            object-cover"
              />
            </div>
      
            <div className="absolute bottom-0 left-0 w-full">
              <img
                src={bwah}
                alt="floral"
                    className=" w-full
            object-cover"
              />
            </div>
    </>
  )
}
