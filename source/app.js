import React from 'react'
import MainLayout from './main-layout.js'
import { render } from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      who: "React"
    }
  }
  render () {
    return (
      <MainLayout></MainLayout>
    )
  }
}

render(<App />, document.getElementById('root'))