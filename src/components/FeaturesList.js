import React, {Component} from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './FeatureCard'

class FeaturesList extends Component {

  render () {
    const features = this.props.features
    return (
      <div>
          { features ?
            features.map(feature => (
              <FeatureCard feature={feature} />
            ))
          : null }
      </div>
    ) 
  }
}

FeaturesList.propTypes = {
  features: PropTypes.array.isRequired
}

export default FeaturesList