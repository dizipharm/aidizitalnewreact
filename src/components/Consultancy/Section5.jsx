import React from 'react'
import Img1 from './../../assets/planning.png'
import Img2 from './../../assets/consulting.png'
import Img3 from './../../assets/data-prep.png'
import Img4 from './../../assets/live-stream.png'



const Section5 = () => {
  return (
  <>
  <div className=' flex flex-col gap-4 font-sans text-center pt-5 text-black bg-white'>
  <div className=' flex flex-col gap-2 lg:px-72  '>
  <h1 className=' text-4xl font-bold' >AI & Machine Learning <span className=' text-[#17b1b1]'>Consulting</span></h1>
  <p className='text-md '>We help our clients understand areas where AI technology and machine learning may benefit their software platforms. We then turn those ideas into solutions by tailoring best-in-class machine learning algorithms to fit their needs.</p>
  </div>
  <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-12  -mt-8  lg:px-20 md:px-20   '>
  <div className= 'flex flex-col  '>
    <img className=' h-20 w-20 ml-32 md:ml-96 lg:ml-56'  src={Img1} alt='img1'/>
    <h1 className=' text-xl font-bold'>Assessment and Planning</h1>
    <p> Our expert team of technology experts can help you assess potential use cases & plan on how you can transform into the future with detailed case studies of our projects. Set goals create roadmaps with in-depth planning, and how to execute your aims and be future-ready.</p>
  </div>
  <div className= 'flex flex-col '>
    <img className=' h-20 w-20 ml-32 md:ml-96 lg:ml-56'  src={Img2} alt='img2'/>
    <h1 className=' text-xl font-bold'>Strategy and Consulting</h1>
    <p> We examine your existing solution in-depth to identify the need for a technology intervention explain its benefits that are specific to your business use case and analyze how we can add value to your business by suggesting a strategically right technology and its benefits in long term.</p>
  </div>
  <div className= 'flex flex-col '>
    <img className=' h-20 w-20 ml-32 md:ml-96 lg:ml-56'  src={Img3} alt='img3'/>
    <h1 className=' text-xl font-bold'>Data Prep and Modeling</h1>
    <p> We create a case-specific Proof of Concept (POC) to demonstrate the practical potential of your project in a time-bound manner and help prep your data, we collect and mine additional data or create accurate and reliable synthetic data and use Blockchain, AI/ML to give you top-quality insights.</p>
  </div>
  <div className= 'flex flex-col '>
    <img className=' h-20 w-20 ml-32 md:ml-96 lg:ml-56'  src={Img4} alt='img4'/>
    <h1 className=' text-xl font-bold'>Iteration and GoLive</h1>
    <p>We develop and deliver scalable solutions to innovate your business operations. Once we know that your project ask is implementation ready and to go live, we will deploy it into production which is scalable with future requirements factored in.</p>
  </div>

  </div>
  </div>
  </>
  )
}

export default Section5
