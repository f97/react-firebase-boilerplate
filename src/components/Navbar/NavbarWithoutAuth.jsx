import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'modules/theme'

function NavbarWithoutAuth({ children, brandPath = '/' }) {
  const { toggleDarkMode, isDarkMode } = useContext(ThemeContext)

  return (
    <div position="static">
      <div>
        <div
          color="inherit"
          variant="h6"
          component={Link}
          to={brandPath}
          data-test="brand">
          React-link
        </div>
        <div />
        <div title="Toggle light/dark theme">
          <div onClick={toggleDarkMode}>{isDarkMode ? <div /> : <div />}</div>
        </div>
        {children}
      </div>
    </div>
  )
}

NavbarWithoutAuth.propTypes = {
  children: PropTypes.element,
  brandPath: PropTypes.string
}

export default NavbarWithoutAuth
