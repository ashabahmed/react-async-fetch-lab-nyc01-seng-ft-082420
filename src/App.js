// create your App component here
import React from 'react'

class App extends React.Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return(
      <h1>Hello</h1>
    )
  }
}

export default App