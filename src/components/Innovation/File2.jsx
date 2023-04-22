import React from 'react'
import Img1 from './../../assets/Accenture-Strategy-Assessment-150x150.png'
import Img2 from './../../assets/Accenture-Touch.png'
import Img3 from './../../assets/Accenture-Lift-Off.png'
import Img4 from './../../assets/ideation.png'
import Img5 from './../../assets/poc.png'
import Img6 from './../../assets/development.png'





const File2 = () => {
  return (
    <>
    <div className=' w-full flex flex-col gap-4 p-8'>
    <div className=' flex flex-col gap-2'>
   <h1 className=' text-5xl font-bold'>Our <span className=' text-[#17b1b1]'>Expertise</span></h1>
   <p className='mr-[45%] font-sans'>Helping you create your new-age technology platforms using blockchain & AI. Your Deep Tech Partners for the future.</p>
   
    </div>
    <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
    <div className=' flex flex-col gap-2'>
    <img className=' w-20' src={Img1} alt='img1' />
    <h1 className=' text-xl font-bold'>Strategy</h1>
    <p>Our expert team shall assess your goals and evaluate blockchain's applicability and business impact to help you define and prioritize your transformation.</p>
    </div>
    <div className=' flex flex-col gap-2'>
    <img className=' w-20' src={Img2} alt='img2' />
    <h1 className=' text-xl font-bold'>Prototyping</h1>
    <p>Our prototyping can be used at any stage of the product development cycle for any components or sub-components, side-by-side with our experts in rapid blockchain development environments.

    </p>
    </div>
    <div className=' flex flex-col gap-2'>
    <img className=' w-20' src={Img3} alt='img3' />
    <h1 className=' text-xl font-bold'>Solution design</h1>
    <p>Maximize your transformation across your business with our competence whose aim is to find a cost-effective solution and maximize your transformation across your business.
        
    </p>
    </div>
    <div className=' flex flex-col gap-2'>
    <img className=' w-20' src={Img4} alt='img4' />
    <h1 className=' text-xl font-bold'>Ideation</h1>
    <p>We discuss the feasibility of your blockchain project with our experts and define the workflows and business outcomes/goals

    </p>
    </div>
    <div className=' flex flex-col gap-2'>
    <img className=' w-20' src={Img5} alt='img5' />
    <h1 className=' text-xl font-bold'>PoC</h1>
    <p>Our Blockchain POC process, framework and prototype, helps in identifying the use cases or a project idea which can be feasible in a real-world situation — a common type of consensus algorithm for blockchain.

    </p>
    </div>
    <div className=' flex flex-col gap-2'>
    <img className=' w-20' src={Img6} alt='img6' />
    <h1 className=' text-xl font-bold'>Development</h1>
    <p>Once you are ready to start blockchain technology development, we help you build the blockchain product, from UI/UX to full front-end and back-end implementation.

    </p>
    </div>

    </div>
     </div>
      </>
  )
}

export default File2
