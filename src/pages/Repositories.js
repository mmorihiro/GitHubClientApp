import React from 'react'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'

// リポジトリ一覧のページ
export default class Repositories extends React.Component {
  constructor (props) {
    super(props)

    // 決め打ちのデータ(後で置き換える)
    this.repositories = [{
      name: 'LifeGame',
      description: 'A lifegame written with Kotlin + Libgdx'
    }, {
      name: 'matchland',
      description: 'A libGDX game written in Kotlin. Spread your land to win!'
    }]
  }

  // リポジトリのデータを受け取って、ListItemに変換する
  renderRow (row, index) {
    return (
      <Ons.ListItem key={index} tappable>
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
    return (
      <Ons.Page
        renderToolbar={() => renderToolbar(true, 'Repositories', this.props.navigator)}
      >
        <Ons.List
          dataSource={this.repositories}
          renderRow={this.renderRow}
        />
      </Ons.Page>
    )
  }
}
