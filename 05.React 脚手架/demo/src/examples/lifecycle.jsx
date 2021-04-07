import { Component } from 'react'

class WithLifeCycle extends Component {
  constructor(props) {
    super(props)

    this.state = null
  }

  render() {
    return <div></div>
  }

  componentDidMount() {}
}

export default WithLifeCycle
