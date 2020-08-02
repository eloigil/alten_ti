import React, {Component} from 'react'

import PropTypes from 'prop-types'

class ControlItem extends Component {

  render () {
    const control = this.props.control
    return (
      <li className="controlItem">
        <span>{control.type}</span>
        <span>{control.dev}</span>
        <span>{control.devOutTotal}</span>
        <span>{control.status}</span>
      </li>
    ) 
  }
}

ControlItem.propTypes = {
  control: PropTypes.object.isRequired
}

export default ControlItem