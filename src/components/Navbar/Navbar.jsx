import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { LIST_PATH, LOGIN_PATH } from 'constants/paths'
import AccountMenu from './NavbarAccountMenu'
import NavbarWithoutAuth from './NavbarWithoutAuth'

function Navbar() {
  // Get auth from redux state
  const auth = useSelector(({ firebase }) => firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  return (
    <NavbarWithoutAuth brandPath={authExists ? LIST_PATH : '/'}>
      {authExists ? (
        <AccountMenu />
      ) : (
        <button component={Link} to={LOGIN_PATH} data-test="sign-in">
          Sign In
        </button>
      )}
    </NavbarWithoutAuth>
  )
}

export default Navbar
