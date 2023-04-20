import React from 'react'
import Get1 from './../../assets/consultation.png'
import Get2 from './../../assets/cost-estimation.png'
import Get3 from './../../assets/kick-off.png'

const Getstarted = () => {
  return (
    <div className="w-full  bg-white flex flex-col justify-center p-12 ">
        <div>
            <div className=' flex flex-col text-center gap-4'>
                <h1 className=' text-2xl font-bold'>Get Started Today</h1>
                <p className=' text-lg px-40'>Our blockchain consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case.</p>
            </div>
            <div className=' grid grid-cols-3 px-28 gap-8 p-8'>
            <div className=' flex flex-col'>
                <img className=' h-20 w-20 border-2 border-spacing-8 border-opacity-100  border-[#17b1b1]' src={Get1} alt='get1' />
                <div className=' flex flex-col'>
                    <h1 className=' text-xl font-bold'>1. Get a Consultation</h1>
                    <p>Get on a call with our team to know the feasibility of your project idea.</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <img className=' h-20 w-20 border-2 border-spacing-8 border-opacity-100  border-[#17b1b1]' src={Get2} alt='get2' />
                <div className=' flex flex-col'>
                    <h1 className=' text-xl font-bold'>2. Get a Cost Estimate</h1>
                    <p>Based on the project requirements, we share a project proposal with budget and timeline estimates.</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <img className=' h-20 w-20 border-2 border-spacing-8 border-opacity-100  border-[#17b1b1]' src={Get3} alt='get3' />
                <div className=' flex flex-col'>
                    <h1 className=' text-xl font-bold'>3. Project Kickoff</h1>
                    <p>Once the project is signed, we bring together a team from a range of disciplines to kick start your project.</p>
                </div>
            </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Getstarted
