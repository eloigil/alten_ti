import React, {Component} from 'react'

import PropTypes from 'prop-types'

class StatusIcon extends Component {

  render () {
    const status = this.props.status
    
    const classes = `statusIcon statusIcon--${status}`
    return (
      <div className={classes}>
          {status === 'ok' ? <span> ✓ </span> : null}
          {status === 'alert' ? <span> ! </span> : null}
          {status === 'error' ? <span> X </span> : null}
      </div>
    ) 
  }
}

StatusIcon.propTypes = {
  status: PropTypes.string
}

export default StatusIcon