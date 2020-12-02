import React from 'react'

const InfoList = ({ lists, ad }) => {
  const List = (list) => {
    if (list.type === 'ad')
      return (
        <div className={'flex flex-row justify-between items-center bg-gray-700 rounded-md my-5 py-5 px-5'}>
          <div className={'font-bold'}>{list.icon}</div>
          <div className={'flex-1 ml-3'}>
            <div className={'text-sm text-gray-400'}>{list.title}</div>
            <div className={'text-lg font-bold'}>{list.subTitle}</div>
          </div>
        </div>
      )
    return (
      <div className={'flex flex-row justify-between my-5'}>
        <div className={'font-bold'}>{list.date}</div>
        <div className={'flex-1 ml-3'}>
          <div className={'font-bold text-lg text-blue-500'}>{list.title}</div>
          <div className={'text-gray-400'}>{list.subTitle}</div>
        </div>
        <div className={'font-bold'}>{list.host}</div>
      </div>
    )
  }

  return <div className={'infoList w-full flex flex-col px-3 mt-5'}>{lists.map(List)}</div>
}

export default InfoList
