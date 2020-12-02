import React from 'react'

const AnnualChangeInfo = ({ changeInfos }) => {
  return (
    <div className={'w-full mt-5 flex flex-col items-center px-3'}>
      <div className={'w-full text-lg text-left mb-5'}>최근 1년간</div>
      <div className={'w-full bg-gray-700 rounded-md flex flex-row justify-center items-center text-center text-gray-300'}>
        <div className={'w-full p-5 py-8'}>
          <p className={'text-sm'}>정보변동</p>
          <em className={'text-xl font-bold text-blue-500'}>{changeInfos.changes}건</em>
        </div>
        <div className={'w-1 bg-gray-500 h-20'} />
        <div className={'w-full p-5 py-8'}>
          <p className={'text-sm'}>금융사에서 정보조회</p>
          <em className={'text-xl font-bold'}>{changeInfos.inquiry}건</em>
        </div>
      </div>
    </div>
  )
}

export default AnnualChangeInfo
