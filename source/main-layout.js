import React from 'react'
import { render } from 'react-dom'
import EventList from './event-list.js'
import CurrentEvent from './current-event.js'

export default class MainLayout extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="main-layout">
        <EventList></EventList>
        <CurrentEvent></CurrentEvent>
      </div>
    )
  }
}
