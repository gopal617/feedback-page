import React from 'react'
import Sec1 from './assets/Sec1'
import Sec2 from './assets/sec2'
function Sections() {
  return (
    <div className='p-50 '>
    <div className='bg-white rounded-2xl w-250'>
        <div  className='flex-col  m-10 mt-2 pt-5'>
            <Sec1 />
            <Sec2 />
        </div>
    </div>
    </div>
  )
}

export default Sections