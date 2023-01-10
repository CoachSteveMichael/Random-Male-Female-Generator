import React from 'react'
import {store} from '../store/store'

async function getData() {
  fetch('https://randomuser.me/api/?page=0&results=10')
  .then(resp=> resp.json())
  .then(data=> store.dispatch({type: 'ADD', 'contacts': data}))
}

export {getData}