import React from 'react'
import Tab from 'components/Tab'
import AnnualChangeInfo from './AnnualChangeInfo'
import { InfoList } from 'components/Lists'

const MyHistory = (props) => {
  const { tabs, activeTab, changeTab, changeInfos, creditInfoList, advertisement } = props
  return (
    <div className={'myHistory flex flex-col flex-wrap justify-center items-center bg-gray-800 text-white px-20 py-12'}>
      <Tab tabs={tabs} active={activeTab} changeTab={changeTab} />
      <AnnualChangeInfo changeInfos={changeInfos} />
      <InfoList lists={creditInfoList} ad={advertisement} />
    </div>
  )
}

export default MyHistory
