import PropTypes from 'prop-types'
import React from 'react'

const Card = ({title}) =>
  <h3>{title}</h3>

Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card
