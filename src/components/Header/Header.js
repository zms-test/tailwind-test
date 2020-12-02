import React from 'react'

const Header = ({ title, theme }) => {
  if (theme === 'white')
    return <div className={'header w-full fixed border-solid border-b text-center text-lg font-bold text-black py-3'}>{title}</div>
  return <div className={'header w-full fixed text-center text-white py-3'}>{title}</div>
}

export default Header
