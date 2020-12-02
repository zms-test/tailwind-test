import React from 'react'
import { CheckApartList } from 'components/Lists'
import ApartAddBtn from './ApartAddBtn'
import BottomArea from './BottomArea'
import NavBar from 'components/Navbar'

const CostAnalysis = ({ selected, apartList, onClickApart, navMenus }) => {
  return (
    <div className={'costAnalysis flex flex-col flex-nowrap justify-center items-center py-12'}>
      <div className={'w-full text-left font-bold text-lg mt-10 px-3'}>
        <p>매도 비용을 분석할</p>
        <p>아파트 1개를 선택해주세요</p>
      </div>
      <CheckApartList list={apartList} selected={selected} onSelect={onClickApart} />
      <ApartAddBtn />
      <BottomArea />
      <NavBar menus={navMenus} />
    </div>
  )
}

export default CostAnalysis
