import React from 'react'

const Section4 = () => {
  return (
    <>
    <div className=' grid grid-flow-row sm:grid-flow-col  gap-20 pt-9 lg:px-20 md:px-20'>
        <div className=''>
            <h1 className=' font-bold text-5xl text-center lg:pt-40 md:pt-40 '> Services</h1>

        </div>
        <div className=' flex flex-col gap-8 '>
        <div className=' flex flex-col'>
            <h4 className=' text-5xl sm:text-4xl font-sans text-center '>Intelligent,<span className=' text-[#17b1b1]'>Digital, <br/>Analytics</span> </h4>
            <p className=' text-center text-lg'>World-class Services, Budget Fit, Highly Scalable</p>
            </div>  
        <div className=' grid grid-flow-row sm:grid-flow-col px-2  gap-4'>

        <div className=' flex flex-col gap-2'>
            <h1 className=' font-semibold'>Intelligent automation</h1>
            <p> We use computational intelligence (CI) to refind data to automate to gain powerful insights into your future needs and address present needs

            </p>
        </div>
        <div className=' flex flex-col gap-2'>
            <h1 className=' font-semibold'>Analytics consulting</h1>
            <p> Our Approach towards analytics is more of a functional role that balances business and hardcore analytics with an aim to deliver value-added analytical solutions

            </p>
        </div>
        <div className=' flex flex-col gap-2'>
            <h1 className=' font-semibold'>Digital Transformation</h1>
            <p> We provide knowledge and experience to businesses so that they ensure that the digital technologies and strategies of the company are connected and the risk of failure is minimized.
                </p>
        </div>
            
            </div>  
        </div>
    </div>

    </>
  )
}

export default Section4
