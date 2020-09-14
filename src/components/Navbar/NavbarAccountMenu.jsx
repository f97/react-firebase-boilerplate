import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { ACCOUNT_PATH } from 'constants/paths'

function AccountMenu() {
  const [anchorEl, setMenu] = useState(null)
  const firebase = useFirebase()

  function closeAccountMenu() {
    setMenu(null)
  }
  function handleMenuClick(e) {
    setMenu(e.target)
  }
  function handleLogout() {
    closeAccountMenu() // redirect to '/' handled by UserIsAuthenticated HOC
    return firebase.logout()
  }

  return (
    <>
      <div
        aria-owns={anchorEl ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenuClick}>
        <div />
      </div>
      <div
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={closeAccountMenu}>
        <div component={Link} to={ACCOUNT_PATH} onClick={closeAccountMenu}>
          Account
        </div>
        <div onClick={handleLogout}>Sign Out</div>
      </div>
    </>
  )
}

export default AccountMenu
