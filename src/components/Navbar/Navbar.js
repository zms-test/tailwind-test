import React from 'react'

const NavBar = ({ menus }) => {
  return (
    <div className={'navBar w-full absolute bottom-0 flex flex-row flex-nowrap px-10 py-1 justify-between text-center'}>
      {menus.map((menu) => (
        <div>
          <p>{menu.icon}</p>
          <p>{menu.name}</p>
        </div>
      ))}
    </div>
  )
}

export default NavBar
