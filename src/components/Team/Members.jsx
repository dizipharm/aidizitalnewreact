import React from 'react'
import Raj from './../../assets/teamphotos/rajmortha.png'
import John from './../../assets/teamphotos/2.JohnRichardson.png'
import Constantyn from './../../assets/teamphotos/3.Constantyn.png'
import David from './../../assets/teamphotos/4.David-Windridge.png'
import Tapan from './../../assets/teamphotos/5.Tapan-Rayaguru.png'
import Stanley from './../../assets/teamphotos/6.Stanley-Vasa.png'

const Members = () => {
  return (
   <>
   <div className=' flex flex-col gap-2 pt-4 px-4'>
    <div>
        <h1 className=' text-2xl font-bold'>
            Our Leaders
        </h1>
    </div>
    <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-8'>
    <div className="card w-80 bg-base-100 shadow-xl">
  <figure>
    <img src={Raj} alt="Raj" /></figure>
  <div className="card-body p-12">
    <h2 className="card-title text-center">
     
      Raj Mortha
    </h2>
    <p className=' text-green-700'>CEO, Board Member</p>
    
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure>
    <img src={John} alt="John" /></figure>
  <div className="card-body p-12">
    <h2 className="card-title text-center">
     
    John Richardson
    </h2>
    <p className=' text-green-700'>CTO, Board Member</p>
    
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure>
    <img src={Constantyn} alt="Constantyn" /></figure>
  <div className="card-body p-12">
    <h2 className="card-title text-center">
     
    Constantyn Chailostis
    </h2>
    <p className=' text-green-700'>CCO, Board Member</p>
    
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure>
    <img src={Tapan} alt="Tapan" /></figure>
  <div className="card-body p-12">
    <h2 className="card-title text-center">
     
    Tapan Rayaguru
    </h2>
    <p className=' text-green-700'>IIT, IIM,Advisory Board</p>
    
  </div>
</div>
<div className="card w-80 bg-base-100 shadow-xl">
  <figure>
    <img src={David} alt="David" /></figure>
  <div className="card-body p-12">
    <h2 className="card-title text-center">
     
    Prof.David Windridge
    </h2>
    <p className=' text-green-700'>Advisory Board</p>
    
  </div>
</div>

<div className="card w-80 bg-base-100 shadow-xl">
  <figure>
    <img src={Stanley} alt="Stanley" /></figure>
  <div className="card-body p-12">
    <h2 className="card-title text-center">
    Stanley Vasa
    </h2>
    <p className=' text-green-700'>LSB, Advisory Board</p>
    
  </div>
</div>

    </div>
   </div>
   </>
  )
}

export default Members
