import React, { useState } from 'react'
import Header from 'components/Header'
import MyHistory from 'components/MyHistory'

const MyHistoryContainer = () => {
  const [activeTab, setActiveTab] = useState('all')
  const tabs = [
    { title: '전체', id: 'all' },
    { title: '신용점수', id: 'credit_score' },
    { title: '신용정보', id: 'credit_info' },
  ]
  const changeTab = (id) => {
    setActiveTab(id)
  }
  const changeInfos = {
    changes: 23,
    inquiry: 13,
  }

  const creditInfoList = [
    { date: '11.28', title: '대출계좌 개설', subTitle: '현대카드', host: '한국신용정보원' },
    { date: '11.28', title: '대출계좌 개설', subTitle: '롯데카드', host: '한국신용정보원' },
    { date: '11.27', title: '신용정보 조회', subTitle: '하나저축 | 개설목적' },
    { date: '11.26', title: '대출계좌 개설', subTitle: 'KB 국민은행', host: '한국신용정보원' },
  ]

  const advertisement = {
    type: 'ad',
    icon: 'ico',
    title: '서재원님 신용등급으로',
    subTitle: '받을 수 있는 대출 보기',
  }

  creditInfoList.splice(1, 0, advertisement)
  return (
    <>
      <Header title={'내 변동내역'} />
      <MyHistory
        tabs={tabs}
        activeTab={activeTab}
        changeTab={changeTab}
        changeInfos={changeInfos}
        creditInfoList={creditInfoList}
        advertisement={advertisement}
      />
    </>
  )
}

export default MyHistoryContainer
