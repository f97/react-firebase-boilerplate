import React from 'react'
import PropTypes from 'prop-types'

function LoadingSpinner({ size }) {
  return <div mode="indeterminate" size={size || 80} />
}

LoadingSpinner.propTypes = {
  size: PropTypes.number
}

export default LoadingSpinner
