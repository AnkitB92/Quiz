import React from 'react'
import Button from '../../components/Button'

const QuizPage = () => {
  return (
    <div className='h-screen content-center p-5 min-w-[320px] bg-neutral-200'>
      <div className="min-h-[500px] flex flex-col rounded-2xl bg-white max-w-[940px] mx-auto p-10">
        <div className='status h-full'>
          <div className='flex items-center justify-between mb-2'>
            <p className='font-[600] text-xl text-neutral-500'>0:14</p>
            <Button className='border border-neutral-200 rounded-lg px-5 py-2 cursor-pointer hover:bg-neutral-50'>
              Quit
            </Button>
          </div>
          <div className='flex items-center justify-center py-4 gap-2 mb-4'>
            <div className='bg-orange-300 h-1.5 w-16 rounded-full'></div>
            <div className='bg-orange-300 h-1.5 w-16 rounded-full'></div>
            <div className='bg-orange-300 h-1.5 w-16 rounded-full'></div>

          </div>
        </div>
        <div className="quiz-zone flex-1">
          <p className='text-center font-[500] text-neutral-500'>
            Select the missing words in the correct order
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuizPage