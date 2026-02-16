import React from 'react'

const Cards = (props) => {
  return (
    <div className='py-3 h-120 pb-10'>
      <div className='w-50 h-110 rounded-2xl overflow-hidden relative transition duration-200 hover:scale-105'>

        <img
          className='h-full w-full object-cover'
          src={props.img}
          alt=""
        />
        <div className='absolute bottom-4 left-4 text-white'>
          <p className='mb-3 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum id in quia perspiciatis non maiores earum explicabo corporis nemo.
          </p>

          <button
            style={{ backgroundColor: props.color }}
            className='text-white px-4 py-2 rounded-full w-32'
          >
            {props.tex}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Cards
