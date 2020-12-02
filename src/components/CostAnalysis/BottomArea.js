import React from 'react'

const BottomArea = () => {
  return (
    <div className={'w-full h-72 flex flex-col justify-between bg-gray-300 mt-10 px-5 text-center'}>
      <div className={'flex flex-row justify-center items-center mt-7'}>
        <p className={'text-gray-500 mr-3'}>아직 고민중이신가요?</p>
        <button className={'bg-white border-solid border-blue-600 border-2 px-5 py-2 rounded-md text-blue-600'}>아파트 추천</button>
      </div>
      <button className={'w-full bg-blue-500 text-white font-bold text-lg rounded-md py-3 mb-5'}>다음으로</button>
    </div>
  )
}

export default BottomArea
