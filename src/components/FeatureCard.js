import React, {Component} from 'react'

import PropTypes from 'prop-types'

import ControlItem from './ControlItem'

class FeatureCard extends Component {

  render () {
    const feature = this.props.feature
    return (
      <div className="featureCard">
        <div className="featureCard__header">
          <h4>{feature.name}</h4>
        </div>
        <div className="featureCard__body">
          <ul>
            {feature.controls.map(control => 
              <ControlItem control={control}/>
              )}
          </ul>
        </div>
      </div>
    ) 
  }
}

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired
}

export default FeatureCard