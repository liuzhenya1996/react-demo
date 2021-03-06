import React from 'react'
import ReactDOM from 'react-dom'
// import BasicTodoList from './basic-todolist/BasicTodoList' // 使用 React 基础知识完成 todolist 组件, 组件内包括一些基础知识的笔记, 请注意复习
// import OpacityInTransition from './animation-demos/css-transition/OpacityInTransition' // 使用纯 css 的 transition 形式制作渐隐渐显
// import OpacityInAnimation from './animation-demos/css-animation/OpacityInAnimation' // 使用纯 css 的 animation 形式制作渐隐渐显
// import Opacity from './animation-demos/css-transition-component/Opacity'// 使用第三方组件 react-transition-group 实现单元素渐隐渐显
// import Opacities from './animation-demos/css-transition-group/Opacities'// 使用第三方组件 react-transition-group 实现循环列表渐隐渐显
// import ReduxThunk from './redux-thunk/ReduxThunk' // redux-thunk  实现 todolist 和数据异步处理
// import ReduxSaga from './redux-saga/ReduxSaga' // redux-saga  实现 todolist 和数据异步处理

 // react-redux 的使用(示例中间件为 redux-thunk
import ReactRedux from './react-redux/ReactRedux'
import { Provider } from 'react-redux'
import store from './react-redux/store'
const ReactReduxApp = (
  <Provider store={store}>
    <ReactRedux />
  </Provider>
)


ReactDOM.render(
  // <BasicTodoList />,
  // <OpacityInTransition />,
  // <OpacityInAnimation />,
  // <Opacity />,
  // <Opacities />,
  // <ReduxThunk />,
  // <ReduxSaga />,
  ReactReduxApp,
  document.getElementById('root')
);
