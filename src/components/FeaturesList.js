import React, {Component} from 'react'

import PropTypes from 'prop-types'

class FeaturesList extends Component {

  render () {
    const features = this.props.features
    return (
      <div>
        <ul>
          { features ?
            features.map(({_id, name}) => (
              <li key={_id}>
                <span>{name}</span>
              </li>
            ))
          : null }
        </ul>
      </div>
    ) 
  }
}

FeaturesList.propTypes = {
  features: PropTypes.array.isRequired
}

export default FeaturesList