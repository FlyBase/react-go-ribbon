import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Strip from './components/Strip'

function Ribbon({ noResults, ...props }) {
  if (props.data && props.data.length != 0) {
    return <Strip {...props} />
  } else {
    return <div>{noResults}</div>
  }
}

Ribbon.propTypes = {
  heatLevels: PropTypes.number,
  baseRGB: PropTypes.arrayOf(PropTypes.number),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      descendant_terms: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  noResults: PropTypes.any,
  title: PropTypes.any,
  itemTitle: PropTypes.any,
  onTermClick: PropTypes.func,
  calcHeatColor: PropTypes.func,
}

Ribbon.defaultProps = {
  heatLevels: 8,
  baseRGB: [0, 96, 96],
  data: [],
  noResults: 'No ribbon data found',
  title: '',
}

export default Ribbon
