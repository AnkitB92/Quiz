import React from 'react'
import verticleDots from '../assets/icons/verticleDots.svg'
import arrowLeft from '../assets/icons/arrowLeft.svg'
import { Link, useLocation } from 'react-router-dom'



const Header = () => {
  const location = useLocation()
  const urlPath = location.pathname
  return (
    <header className='fixed w-full h-16 shadow-sm flex justify-around bg-gray-50'>
      <section className='w-44 flex justify-start select-none'>
        {
          urlPath !== '/' && <Link to='/' title="Home" className='px-4 content-center'>
            <img src={arrowLeft} alt="options" />
          </Link>
        }
      </section>
      <section className='content-center select-none shrink-0'>
        <p className='text-lg font-[500] shrink-0'>Sentence Construction</p>
      </section>
      <section className='w-44 flex justify-end select-none'>
        <button
          aria-label='options'
          title="options"
          className='cursor-pointer px-4'>
          <img src={verticleDots} alt="options" className='min-w-fit' />
        </button>
      </section>
    </header>
  )
}

export default Header