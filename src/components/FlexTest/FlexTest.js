import React from 'react'
import styled from 'styled-components'

const SplitDiv = styled.div`
  height: ${(props) => props.height || '100%'};
  background: gray;
  width: 2px;
  margin: 0 10px;
`

const FlexTestBox = ({ align, direction, split }) => {
  return (
    <div
      className={'flex flex-row flex-wrap mx-5 my-3 p-2 border-2 border-blue-300 rounded-md max-h-32'}
      style={{ alignItems: align, flexDirection: direction, split }}
    >
      <div className={'mx-1'}>{align}</div>
      <div className={'mx-1'}>
        <button className={'bg-blue-500 text-white rounded-md py-2 px-3'}>Primary</button>
      </div>
      <div style={{ height: 100 }} className={'bg-gray-300 rounded-md mx-1 px-3 pb-6 flex flex-col justify-end'}>
        Block
      </div>
    </div>
  )
}

const SplitBox = ({ Split }) => {
  return (
    <div className={'mt-40 flex flex-row flex-nowrap items-center text-blue-500 font-bold'}>
      <a>Link</a>
      <Split height={'12px'} />
      <a>Link</a>
      <Split height={'15px'} />
      <a>Link</a>
    </div>
  )
}

const FlexTest = () => {
  return (
    <div className={'flexTest h-full flex flex-col justify-center items-center py-32'}>
      <div className={'flex flex-row justify-center items-center'}>
        <FlexTestBox align={'center'} />
        <FlexTestBox align={'flex-start'} />
      </div>
      <div className={'flex flex-row justify-center items-center'}>
        <FlexTestBox align={'flex-end'} />
        <FlexTestBox align={'baseline'} />
      </div>
      <SplitBox Split={SplitDiv} />
    </div>
  )
}

export default FlexTest
