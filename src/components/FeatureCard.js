import React, {Component} from 'react'

import PropTypes from 'prop-types'

import ControlItem from './ControlItem'

class FeatureCard extends Component {

  render () {
    const feature = this.props.feature
    const gridStyles = {
      gridColumnStart: feature.uiColStart,
      gridColumnEnd: feature.uiColEnd,
      gridRowStart: feature.uiRowStart,
      gridRowEnd: feature.uiRowEnd,
    }
    const classes = `featureCard__header featureCard__header--${feature.status}`
    return (
      <div className="featureCard" style={gridStyles}>
        <div className={classes}>
          <h4>{feature.name}</h4>
        </div>
        <div className="featureCard__body">
          <ul>
            {feature.controls.map((control, index) => 
              <ControlItem control={control} key={index}/>
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