import React, {Component} from 'react'

import PropTypes from 'prop-types'

import ControlItem from './ControlItem'
import StatusIcon from './StatusIcon'

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
          <StatusIcon status={feature.status} white/>
        </div>
        <div className="featureCard__body">
          <ul>
            <li className="controlItem controlItem__title">
              <span>Control</span>
              <span>Dev</span>
              <span>Dev tot</span>
              <span></span>
            </li>
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