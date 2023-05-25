import React from "react"
// Auth Imports
import Login from './login'
// Icon Imports
import { MdHome, MdOutlineShoppingCart, MdBarChart, MdPerson, MdLock, } from "react-icons/md"

const routes = [
  //  {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  {
    name: "Sign In",
    layout: "/login",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <Login />,
  },
]
export default routes
