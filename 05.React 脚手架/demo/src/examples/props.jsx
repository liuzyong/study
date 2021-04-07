import { Component } from 'react'

class WithProps extends Component {
  render() {
    const { onChange, value, options = [] } = this.props

    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={null}>——————</option>
        {options.map((o, index) => (
          <option key={index} value={o.value}>
            {o.name}
          </option>
        ))}
      </select>
    )
  }
}

export default WithProps
