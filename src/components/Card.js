import React from 'react'
import {connect} from 'react-redux'

function Card (props) {



  return (
    <div>
      <h1>{props.gender} </h1>
      <img src = {props.picture}/>
    </div>
  )
}

export {Card}