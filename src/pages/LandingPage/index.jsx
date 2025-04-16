import React from 'react'
import quizIcon from '../../assets/icons/quizIcon.svg'
import coinIcon from '../../assets/icons/ellipse.svg'
import { Link } from 'react-router-dom'



const LandingPage = () => {
  return (
    <div className='py-20 px-5 content-center text-center min-h-screen sm:p-5 max-w-[700px] mx-auto'>

      <img src={quizIcon} alt="" className='mx-auto mb-8' />
      <h1 className='text-2xl sm:text-[2.5rem] sm:leading-11 mb-2 text-neutral-900 font-semibold'>
        Sentence Construction
      </h1>
      <p
        className='text-md sm:text-xl text-neutral-400 mb-10'>
        Select the correct words to complete the sentence by arranging the provided options in the right order.
      </p>
      <div className='flex justify-center mb-12 flex-col sm:flex-row'>
        <div className="w-44 sm:w-52 sm:text-lg font-[500] px-4 border-neutral-300 border-b-2 mx-auto mb-4 sm:border-0 sm:mx-0">
          <p className='sm:mb-3'>Time Per Question</p>
          <p>30 Sec</p>
        </div>
        <div className="w-44 sm:w-52 sm:text-lg font-[500] px-4 sm:border-x-2 border-neutral-300 border-b-2 mx-auto mb-4 sm:border-0 sm:mx-0">
          <p className='sm:mb-3'>Total Questions</p>
          <p className=''>10</p>
        </div>
        <div className="w-44 mx-auto sm:mx-0 sm:w-52 sm:text-lg font-[500] px-4">
          <p className='sm:mb-3'>Coins</p>
          <div className='flex items-center justify-center gap-1.5'>
            <img src={coinIcon} alt="coin" className='spin-horizontal' />
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 font-[500]">
        <Link
          className='w-32 text-indigo-600 border px-6 py-2.5 rounded-lg'
        >
          Back
        </Link>
        <Link
          to='/quiz'
          className='w-32 bg-indigo-600 text-white border px-6 py-2.5 rounded-lg'>
          Start
        </Link>
      </div>
    </div>
  )
}

export default LandingPage