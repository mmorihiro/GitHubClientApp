import React from 'react'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'

// ブランチ一覧のページ
export default class Branches extends React.Component {
  constructor (props) {
    super(props)

    // 決め打ちのデータ(後で置き換える)
    this.branches = [
      'master',
      'develop',
      'release'
    ]
  }

  // ブランチのデータを受け取って、ListItemに変換する
  renderRow (row, index) {
    return (
      <Ons.ListItem key={index}>
        <div className='left'>
          <Ons.Icon icon='code-fork' class='list-item__icon' />
        </div>
        <div className='center'>
          <span className='list-item__title'>
            {row}
          </span>
        </div>
      </Ons.ListItem>
    )
  }

  render () {
    return (
      <Ons.Page
        renderToolbar={() => renderToolbar(true, 'Branches', this.props.navigator)}
      >
        <Ons.List
          dataSource={this.branches}
          renderRow={this.renderRow}
        />
      </Ons.Page>
    )
  }
}
