import React from 'react'

const Tab = ({ tabs, changeTab, active }) => {
  return (
    <div className={'tab text-center flex justify-center border-solid border-b border-gray-500 w-full'}>
      {tabs.map((tab, i) => (
        <div
          className={active === tab.id ? 'mx-2 border-solid border-white border-b-2 w-24 py-2' : 'mx-2 w-24 text-gray-500 py-2'}
          key={`tab_${i}`}
          onClick={() => {
            changeTab(tab.id)
          }}
        >
          {tab.title}
        </div>
      ))}
    </div>
  )
}

export default Tab
