import bwah from "../assets/Img/bawah.png"
import btas from "../assets/Img/atas.png"



export default function Bunga() {
  return (
    <>
      {/* Background Top Floral */}
          
                  
      
    
     
    
      
      
            <div className="absolute top-0 left-0 xl:left-[730px] xl:top-[1px]  md:left-[309px] tw-full overflow-hidden pointer-events-none">
  <img
    src={btas}
    alt="Top Floral"
    className="
      block
      mx-auto

      w-[170%]
      xs:w-[155%]
      sm:w-[145%]
      md:w-[990%]
      lg:w-[100%]
      xl:w-[180%]
      2xl:w-[90%]

      h-auto
      object-contain
      object-top
      select-none
    "
  />
</div>

<div className="absolute bottom-0 left-0  xl:left-[-400px] xl:bottom-[1px]   md:left-[-150px]  w-full overflow-hidden pointer-events-none">
  <img
    src={bwah}
    alt="Bottom Floral"
    className="
        block
      mx-auto

      w-[170%]
      xs:w-[155%]
      sm:w-[145%]
      md:w-[70%]
      lg:w-[100%]
      xl:w-[40%]
      2xl:w-[90%]

      h-auto
      object-contain
      object-top
      select-none
    "
  />
  
</div>
    
      
          
             
    </>
  )
}
