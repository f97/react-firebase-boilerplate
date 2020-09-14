import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './ThemeContext'

export default function ThemeProvider({ children }) {
  const [isDarkMode, changeIsDarkMode] = useState(false)

  const contextValue = {
    isDarkMode,
    toggleDarkMode: useCallback(() => changeIsDarkMode(!isDarkMode), [
      changeIsDarkMode,
      isDarkMode
    ])
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.element
}
