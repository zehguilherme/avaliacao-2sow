import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login'
import InsertEditUser from './pages/InsertEditUser'
import UserList from './pages/UserList'

export default function Routes () {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={InsertEditUser} path="/insert-edit-user" />
      <Route component={UserList} path="/user-list" />
    </BrowserRouter>
  )
}
