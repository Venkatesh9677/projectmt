import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthRouter = () => {
    const token = false;
  return (
    <div>{token ? <Outlet/>:<Navigate to={'login'}/>}</div>
  )
}

export default AuthRouter