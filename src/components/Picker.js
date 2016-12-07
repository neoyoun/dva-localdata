import React,{ Component, PropTypes } from 'react'

export default class Picker extends Component {
  render(){
    const { value, onChange, options } = this.props
    return (
      <span>
        <h2>{value}</h2>
        <select onChange={ e=> {console.log('select ',e.target.value); return onChange(e.target.value)}}
          >
          {options.map(option=>
            <option value={option} key={option}>
              {option}
            </option>
            )}
        </select>
      </span>
      )
  }
}
Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
    ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
