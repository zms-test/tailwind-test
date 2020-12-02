import React from 'react'

const CheckApartList = ({ list, selected, onSelect }) => {
  return (
    <div className={'checkApartList w-full flex flex-col flex-nowrap justify-start items-center mt-10 px-3'}>
      {list.map((apart) => (
        <div
          className={
            selected === apart.id
              ? 'checkApart w-full flex flex-row flex-nowrap justify-between items-center py-5 px-3 my-1 border-solid border-2 border-blue-500 rounded-md'
              : 'checkApart w-full flex flex-row flex-nowrap justify-between items-center py-5 px-3 my-1 border-solid border-2 border-purple-700 rounded-md'
          }
        >
          <div className={'address flex flex-col'}>
            <p className={'text-md'}>
              <em className={'text-blue-500 font-bold not-italic mr-2'}>My home</em>
              {apart.address}
            </p>
            <p className={'text-lg font-bold mt-2'}>{apart.address_detail}</p>
          </div>
          <input type={'checkbox'} value={apart.id} checked={selected === apart.id} onClick={onSelect} />
        </div>
      ))}
    </div>
  )
}

export default CheckApartList
