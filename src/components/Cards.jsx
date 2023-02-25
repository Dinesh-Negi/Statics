import React from 'react';
import Single from '../assests/Single.png';
import Double from '../assests/Double.png';
import Triple from '../assests/Triple.jpg';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt=""/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font'>
                <p className='py-2 border-b mx-8 mt-8 font-bold'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 font-bold'>1 Granted User</p>
                <p className='py-2 border-b mx-8 font-bold'>Send up to 2 Gb</p>
            </div> 
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black md:mx-auto'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt=""/>
            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-4xl font-bold'>$199</p>
            <div className='text-center font'>
                <p className='py-2 border-b mx-8 mt-8 font-bold'>1 TB Storage</p>
                <p className='py-2 border-b mx-8 font-bold'>3 Users Allowed</p>
                <p className='py-2 border-b mx-8 font-bold'>Send up to 10 Gb</p>
            </div> 
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 md:mx-auto'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/"/>
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-4xl font-bold'>$299</p>
            <div className='text-center font'>
                <p className='py-2 border-b mx-8 mt-8 font-bold'>5 TB Storage</p>
                <p className='py-2 border-b mx-8 font-bold'>10 Users Allowed</p>
                <p className='py-2 border-b mx-8 font-bold'>Send up to 20 Gb</p>
            </div> 
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black md:mx-auto'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards;
