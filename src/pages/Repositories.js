import React from 'react'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'
import Branches from './Branches'

// リポジトリ一覧のページ
export default class Repositories extends React.Component {
  constructor (props) {
    super(props)

    this.state = {repositories: []}

    fetch('https://api.github.com/users/' + Repositories.userName + '/repos')
      .then(response => response.json())
      .then(json => {
        // レポジトリの名前と説明をJSONから取り出し、リストとして組み立てる
        const list = json.map(
          repo => {
            return {
              name: repo.name,
              description: repo.description
            }
          }
        )
        this.setState({repositories: list})
      })
      .catch(error => console.error(error))

    // onClickなどで呼ばれたメンバ関数がthisを使えるようにする
    this.renderRow = this.renderRow.bind(this)
    this.moveToBranches = this.moveToBranches.bind(this)
  }

  moveToBranches () {
    this.props.navigator.pushPage({page: Branches, key: 'Branches'})
  }

  // リポジトリのデータを受け取って、ListItemに変換する
  renderRow (row, index) {
    return (
      <Ons.ListItem key={index} tappable onClick={this.moveToBranches}>
        <div className='center'>
          <span className='list-item__title'>
            {row.name}
          </span>
          <span className='list-item__subtitle'>
            {row.description}
          </span>
        </div>
      </Ons.ListItem>
    )
  }

  render () {
    console.log(this.props.userName)

    return (
      <Ons.Page
        renderToolbar={() => renderToolbar(true, 'Repositories', this.props.navigator)}
      >
        <Ons.List
          dataSource={this.state.repositories}
          renderRow={this.renderRow}
        />
      </Ons.Page>
    )
  }
}
