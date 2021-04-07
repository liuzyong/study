import { Component } from 'react'
import {
  Card,
  WithLifeCycle,
  WithProps,
  WithState,
  FunctionCard,
  WithHooks,
} from './examples'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null,
    }

    this.options = [
      {
        value: 'apple',
        name: '苹果',
      },
      {
        value: 'pineapple',
        name: '菠萝',
      },
      {
        value: 'orange',
        name: '橘子',
      },
    ]
  }

  render() {
    const { value } = this.state

    return (
      <div className="app">
        <Card title="State 演示">
          <WithState />
        </Card>
        <Card title="Props 演示">
          <WithProps
            options={this.options}
            value={value}
            onChange={(v) =>
              this.setState({
                value: v,
              })
            }
          />
          <div>你选择了{value}</div>
        </Card>
        <Card title="Lifecycle 演示">
          <WithLifeCycle />
        </Card>
        <FunctionCard title="Hooks 演示">
          <WithHooks />
        </FunctionCard>
      </div>
    )
  }
}

export default App
