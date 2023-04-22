import React, { useState } from 'react';
import Img1 from './../../assets/data-access.jpg'
import Img2 from './../../assets/data-security.jpg'
import Img3 from './../../assets/data-the-cloud.jpg'


const File5 = () => {

    const allTabsGroup = document.querySelectorAll(".tabs-group");

    allTabsGroup.forEach((tabsGroup) => {
        for (let i = 0; i < tabsGroup.children.length; i++) {
            const tabs = tabsGroup.children[i].querySelectorAll('.tabs');
            const tabContent = tabsGroup.children[i].querySelectorAll('.tab-content-item');
            const indicator = tabsGroup.children[i].querySelector('.indicator');
            const tabsContainer = tabsGroup.children[0];
            const content = tabsGroup.children[1].querySelectorAll('.tab-content-item');

            if (indicator) {
                indicator.classList.add('bg-blue-500', 'h-0.5', 'absolute', 'bottom-0', 'left-0', 'transition-all', 'duration-200');
                indicator.style.width = `${100 / tabs.length}%`;
            }

            if (tabsContainer) {
                tabsContainer.classList.add('relative', 'flex', 'flex-row', 'items-center', 'justify-center');
            }

            if (content) {
                content.forEach((item) => {
                    item.classList.add('hidden', 'relative');
                });
                content[0].classList.remove('hidden');
            }

            const updateContent = (old, index) => {
                let oldContent = content[old / 100];
                let newContent = content[index];
                if ((old / 100) === index) return;

                if (oldContent && newContent) {
                    oldContent.classList.add('absolute', 'opacity-0', 'transition-all', 'duration-200');
                    newContent.classList.add('absolute', 'opacity-0', 'transition-all', 'duration-200');

                    setTimeout(() => {
                        oldContent.classList.remove('absolute', 'opacity-0', 'transition-all', 'duration-200');
                        oldContent.classList.add('hidden');

                        newContent.classList.add('!opacity-100');

                        newContent.classList.remove('!left-0', '!opacity-100', 'absolute', 'opacity-0', 'transition-all', 'duration-200');
                        newContent.classList.remove('hidden');
                    }, 200);
                }
            }

            tabs.forEach((tab, index) => {
                tab.classList.add('p-4', 'text-center', 'w-full', 'cursor-pointer', 'transition-all', 'duration-200', 'hover:bg-gray-200');
                tab.addEventListener('click', () => {
                    let old = (String(indicator.style.transform || 'translateX(0%)').split('translateX(')).filter(Boolean).join('').split('%)')[0];
                    indicator.style.transform = `translateX(${index * 100}%)`;
                    updateContent(old, index);
                })
            });

        }
    });
 
  return (
   <>
    <div className=' w-full h-screen flex gap-4 px-12 pt-8'>
        <h1 className=' w-3/12 text-3xl   font-bold'> How <span className=' text-[#17b1b1]' >We Do</span> </h1>
        <div className=' w-9/12'>

        <div class="tabs-group">
    <div class="tabs-container">
      <div class="tabs">
        <p>Data Transformation</p>
      </div>
      <div class="tabs">
        <p>Machine Learning and AI</p>
      </div>
      <div class="tabs">
        <p>Data Visualization</p>
      </div>
      <div class="indicator" />
    </div>
    <div class="tab-content">
      <div class="tab-content-item flex gap-2 pt-2">
        <img className=' w-2/3 h-80' src={Img1} alt='img1'/>
        <div className=' flex flex-col'> 
        <h1 className=' text-2xl '>Data<br/> <span className=' text-[#17b1b1]'>Transformation</span></h1>
        <p className=' text-lg'>With more than 20 years of experience in data discovery and transformation, we help you with a fastest and easiest way to extract data from difficult, semi-structured data, as well as from Big Data and other structured sources.

        </p>
        </div>
        
      </div>
      <div class="tab-content-item flex gap-2 pt-2">
        <img className=' w-2/3 h-80' src={Img2} alt='img2'/>
        <div className=' flex flex-col'> 
        <h1 className=' text-2xl '>Machine Learning <span className=' text-[#17b1b1]'>and AI</span></h1>
        <p className=' text-lg'>We deliver machine learning and AI solutions quickly get to the granular , delivering transparency Our flexible no-code approach doesn’t restrict how models are configured and tuned, giving you control over model building.
         </p>
        </div>
        
      </div>
      <div class="tab-content-item flex gap-2 pt-2">
        <img className=' w-2/3 h-80' src={Img3} alt='img3'/>
        <div className=' flex flex-col'> 
        <h1 className=' text-2xl '>Data<br/> <span className=' text-[#17b1b1]'>Visualization</span></h1>
        <p className=' text-lg'>We help you with building visualization tools that give you fast, fully informed decisions by crunching all sorts of siloed data points across your business.
         </p>
        </div>
        
      </div>
    </div>
  </div>
             
        </div>
      
      </div>
   </>
  )
}

export default File5
