import React, { useState } from 'react'
import CostAnalysis from 'components/CostAnalysis'
import Header from 'components/Header'

const CostAnalysisContainer = () => {
  const [selected, setSelected] = useState(1)
  const apartList = [
    { id: 1, address: '서울시 강남구 삼성동', address_detail: '삼성동 래미안 아파트 48평' },
    { id: 2, address: '서울시 강남구 삼성동', address_detail: '삼성동 래미안 아파트 48평' },
  ]
  const onClickApart = (e) => {
    setSelected(Number(e.target.value))
  }
  const navMenus = [
    { icon: 'icon', name: '홈' },
    { icon: 'icon', name: '홈' },
    { icon: 'icon', name: '홈' },
    { icon: 'icon', name: '홈' },
    { icon: 'icon', name: '홈' },
  ]

  return (
    <>
      <Header title={'매도 비용 분석'} theme={'white'} />
      <CostAnalysis selected={selected} apartList={apartList} onClickApart={onClickApart} navMenus={navMenus} />
    </>
  )
}

export default CostAnalysisContainer
