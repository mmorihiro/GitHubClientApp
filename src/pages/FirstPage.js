import React from 'react'
import ons from 'onsenui'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'
import Repositories from './Repositories'

// 最初に表示されるページ
export default class FirstPage extends React.Component {
  constructor (props) {
    super(props)

    // onClickなどで呼ばれたメンバ関数がthisを使えるようにする
    this.showAlert = this.showAlert.bind(this)
    this.moveToRepositories = this.moveToRepositories.bind(this)
  }

  showAlert () {
    ons.notification.alert('Hello world!')
  }

  moveToRepositories () {
    this.props.navigator.pushPage({ page: Repositories, key: 'Repositories' })
  }

  render () {
    return (
      <Ons.Page
        renderToolbar={() => renderToolbar(false, 'First page', this.props.navigator)}
      >
        <Ons.Button onClick={this.showAlert}>
          Tap me!
        </Ons.Button>
        <Ons.Button onClick={this.moveToRepositories}>
          Repositories
        </Ons.Button>
      </Ons.Page>
    )
  }
}
