import React from 'react'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'
import Repositories from './Repositories'

// 最初に表示されるページ
export default class FirstPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {userName: ''}

    // onClickなどで呼ばれたメンバ関数がthisを使えるようにする
    this.moveToRepositories = this.moveToRepositories.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
  }

  moveToRepositories () {
    Repositories.userName = this.state.userName
    this.props.navigator.pushPage({
      page: Repositories,
      key: 'Repositories',
      props: {
        userName: this.state.userName
      }
    })
  }

  handleUserNameChange (e) {
    this.setState({userName: e.target.value})
  }

  render () {
    return (
      <Ons.Page
        renderToolbar={() => renderToolbar(false, 'GitHubClient', this.props.navigator)}
      >
        {/* styleで位置の調整ができる */}
        <div style={{textAlign: 'center'}}>
          <p>
            <img src='octocat.png'
              alt='octocat'
              style={{
                // vhはビューポートの高さに対する1/100の単位
                marginTop: '20vh',
                marginBottom: '10vh'
              }} />
          </p>
          <Ons.Input
            onChange={this.handleUserNameChange}
            modifier='underbar'
            placeholder='UserName'
          />

          <Ons.Button
            // まだ何もせずにページ遷移
            onClick={this.moveToRepositories}
            style={{marginLeft: '6px'}}>
            Search
          </Ons.Button>
        </div>
      </Ons.Page>
    )
  }
}
