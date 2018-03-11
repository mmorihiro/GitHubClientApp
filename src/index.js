import React from 'react'
import ReactDOM from 'react-dom'
import * as Ons from 'react-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import FirstPage from './pages/FirstPage'
import registerServiceWorker from './registerServiceWorker'

// 最初に読み込まれるコード
// FirstPageを読み込んでNavigatorに渡す処理を行っている
ReactDOM.render(
  <Ons.Navigator
    renderPage={(route, navigator) => {
      const props = {
        key: route.key,
        navigator,
        ...route.props
      }
      return React.createElement(route.page, props)
    }}
    initialRoute={{ page: FirstPage, key: 'FirstPage' }}
  />,
  document.getElementById('root')
)

// PWA対応に必要なServiceWorkerを登録
// create-react-appで自動生成されたものなので中身はよくわからない
registerServiceWorker()
