import React, {Component} from 'react'

import PropTypes from 'prop-types'

import ControlItem from './ControlItem'

class FeatureCard extends Component {

  render () {
    const feature = this.props.feature
    const classes = `featureCard__header featureCard__header--${feature.status}`
    return (
      <div className="featureCard">
        <div className={classes}>
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