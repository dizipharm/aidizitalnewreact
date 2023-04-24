import React from 'react'
import Img1 from './../../assets/aboutusphotos/gallifordtry_logo-.png'
import Img2 from './../../assets/aboutusphotos/aws.png'
import Img3 from './../../assets/aboutusphotos/pwc.jpg'
import Img4 from './../../assets/aboutusphotos/lindum.jpg'
import Img5 from './../../assets/aboutusphotos/zywpeit_logo.png'
import Img6 from './../../assets/aboutusphotos/swissnutricia_logo.jpg'
import Img7 from './../../assets/aboutusphotos/aurobindo-logo.png'
import Img8 from './../../assets/aboutusphotos/cipla.jpg'
import Img10 from './../../assets/aboutusphotos/3gi.jpg'
import Img11 from './../../assets/aboutusphotos/neemtree.png'
import Img12 from './../../assets/aboutusphotos/metrarc.png'
import Img13 from './../../assets/aboutusphotos/support_us1.png'
import Img14 from './../../assets/aboutusphotos/support_us2.jpg'
import Img15 from './../../assets/aboutusphotos/support_us3.png'
import Img16 from './../../assets/aboutusphotos/support_us4.png'
import Img17 from './../../assets/aboutusphotos/support_us5.png'

const New2 = () => {
  return (
    <div>
     <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full flex gap-12 h-16  justify-between object-contain">
  <img src={Img3} className="" />
  <img src={Img1} className="" />
  <img src={Img4} className="" />
  <img src={Img2} className="" />
  <img src={Img5} className="" />
  </div> 
  <div id="item2" className="carousel-item w-full flex gap-12 h-16  justify-between object-contain">
  <img src={Img6}/>
  <img src={Img7}/>
  <img src={Img8}/>
  <img src='https://delmergate.com/MedicineChest/Website/img/Instances/97/CustomContent/41096_20230216093638.jpg' alt='img9'/>
  <img src={Img10}/>
  </div> 
  <div id="item3" className="carousel-item w-full flex gap-12 h-16  justify-between object-contain">
  <img src={Img11} className="" />
  <img src={Img12} className="" />
  <img src={Img13} className="" />
  <img src={Img14} className="" />
  <img src={Img15} className="" />  </div> 
  <div id="item4" className="carousel-item w-full flex gap-4 h-16   object-contain">
  <img src={Img16}/>
  <img src={Img17}/>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default New2
