import React, {Component} from 'react'

import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ItemsLIst extends Component {

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    const { items } = this.props.item

    return (
      <div>
        <ul>
          {items.map(({_id, name}) => (
            <li key={_id}>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    ) 
  }
}

ItemsLIst.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(
  mapStateToProps,
  { getItems }
)(ItemsLIst)