import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const Left = () => {
  return (
    <div className='pt-10'>
    < div className='w-80 flex flex-col justify-between gap-25 '>
        <div className='flex flex-col gap-7'>
            <div className=''>
            <h2 className='text-black font-bold text-4xl mb-2.5'> Prospective</h2>
            <h2  className='text-black font-bold text-4xl mb-2.5 bg-gray-200 rounded-full w-42'>Customer</h2>
            <h2  className='text-black font-bold text-4xl '>Segmentation</h2>
            </div>
            <div className=' pr-8 '>
                <p className='text-black font-light font-light '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis delectus deserunt nulla omnis sed?
                </p>
            </div>
        </div>
        <div>  
            <ArrowUpRight className='pr-5' size={70} color="#121111" />
        </div>
    </div>
</div>
  )
}

export default Left