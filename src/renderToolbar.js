import React from 'react'
import * as Ons from 'react-onsenui'

// ツールバーを表示する関数
export default (hasBackButton, title, navigator) => {
  const backButton = hasBackButton
    ? <Ons.BackButton onClick={() => { navigator.popPage() }}>Back</Ons.BackButton>
    : null

  return (
    <Ons.Toolbar>
      <div className='left'>{backButton}</div>
      <div className='center'>{title}</div>
    </Ons.Toolbar>
  )
}
