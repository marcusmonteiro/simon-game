import React, { PropTypes } from 'react'

export default function OnAndOffSwitch ({ clickHandler }) {
  return (
    <div>
      ON/OFF
    </div>
  )
}

OnAndOffSwitch.propTypes = {
  clickHandler: PropTypes.func.isRequired
}
