import React from 'react'
import ons from 'onsenui'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'

// 最初に表示されるページ
export default class FirstPage extends React.Component {
  constructor (props) {
    super(props)

    // onClickなどで呼ばれたメンバ関数がthisを使えるようにする
    this.showAlert = this.showAlert.bind(this)
  }

  showAlert () {
    ons.notification.alert('Hello world!')
  }

  render () {
    return (
      <Ons.Page
        renderToolbar={() => renderToolbar(false, 'First page', this.props.navigator)}
      >
        <Ons.Button onClick={this.showAlert}>
          Tap me!
        </Ons.Button>
      </Ons.Page>
    )
  }
}
