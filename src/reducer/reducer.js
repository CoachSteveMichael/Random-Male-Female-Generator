import React from 'react'

function reducer (state = [], action) {
  switch(action.type) {
    case 'ADD': return [action.contacts.results];
    default: return state
  }
}

export {reducer}