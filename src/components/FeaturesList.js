import React, {Component} from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './FeatureCard'

class FeaturesList extends Component {

  render () {
    const features = this.props.features
    return (
      <div className="featuresList">
          { features ?
            features.map((feature, index) => (
              <FeatureCard feature={feature} key={index} />
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