import React, {Component} from 'react'

import { connect } from 'react-redux'
import { getPart } from '../actions/partActions'
import PropTypes from 'prop-types'

import FeaturesList from '../components/FeaturesList';

class PartPage extends Component {

  componentDidMount () {
    this.props.getPart()
  }

  render () {
    const { part } = this.props.part

    return (
      <div>
        <h2>{part.name}</h2>

        { part.features ? <FeaturesList features={part.features}/> : null}
      </div>
    ) 
  }
}

PartPage.propTypes = {
  getPart: PropTypes.func.isRequired,
  part: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  part: state.part
})

export default connect(
  mapStateToProps,
  { getPart }
)(PartPage)