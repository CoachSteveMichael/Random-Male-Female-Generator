import React from 'react'
import {Card} from './Card.js'
import {connect} from 'react-redux'

function Cardlist ({person}) {

  console.log('person', person)

  let cardElements = person && person[0]?.map((ele, index)=> {
    return <Card 
      gender = {ele.gender}
      key = {index}
      picture = {ele.picture.thumbnail}
    />
  })
  return (
    <div className = 'cardlist'>

      {cardElements}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    person: state
  }
}

export default connect(mapStateToProps)(Cardlist)