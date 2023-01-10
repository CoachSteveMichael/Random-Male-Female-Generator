import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../reducer/reducer'
import thunk from 'redux-thunk'

let middleWare = applyMiddleware(thunk)

const store = createStore(reducer, middleWare)


store.subscribe(()=> {
  console.log('state', store.getState())
})


store.dispatch({
  type: '',
  payload: 1
})
export {store}