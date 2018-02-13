import React from 'react'
import * as Ons from 'react-onsenui'

import renderToolbar from '../renderToolbar'
import Repositories from './Repositories'

// 最初に表示されるページ
export default class FirstPage extends React.Component {
    constructor(props) {
        super(props)

        // onClickなどで呼ばれたメンバ関数がthisを使えるようにする
        this.moveToRepositories = this.moveToRepositories.bind(this)
    }

    moveToRepositories() {
        this.props.navigator.pushPage({page: Repositories, key: 'Repositories'})
    }

    render() {
        return (
            <Ons.Page
                renderToolbar={() => renderToolbar(false, 'GitHubClient', this.props.navigator)}
            >
                <p style={{textAlign: 'center'}}>
                    <Ons.Input
                        modifier='underbar'
                        placeholder="UserName"/>

                    <Ons.Button
                        onClick={this.moveToRepositories}
                        style={{margin: '6px'}}>
                        Search
                    </Ons.Button>
                </p>
            </Ons.Page>
        )
    }
}
