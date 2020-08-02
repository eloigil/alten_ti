import React, {Component} from 'react'

import { connect } from 'react-redux'
import { getPart } from '../actions/partActions'
import PropTypes from 'prop-types'

class FeaturesList extends Component {

  componentDidMount () {
    this.props.getPart()
  }

  render () {
    const part = this.props.part
    return (
      <div>
        <ul>
          {part.part.features ?
            part.part.features.map(({_id, name}) => (
              <li key={_id}>
                <span>{name}</span>
              </li>
            ))
          : null}
        </ul>
      </div>
    ) 
  }
}

FeaturesList.propTypes = {
  getPart: PropTypes.func.isRequired,
  part: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  part: state.part
})

export default connect(
  mapStateToProps,
  { getPart }
)(FeaturesList)