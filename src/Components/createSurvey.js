import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import CreateQuestion from './createQuestion'
import Navbar2 from './Dashboard/common/Navbar2'
import SideNavbar from './Dashboard/common/SideNavbar'

import { Link } from "react-router-dom"



const dashboard = props => {
  return (

    <Fragment>
      <div>

        <SideNavbar />
        <div className="relative md:ml-64 bg-gray-200">
          <Navbar2 />
          <div className="relative  bg-cool-back-color md:pt-32  pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">

              <div>
                <Link to="/dashboard/createQuestion">
                  <button className="text-sm text-blackColor1 font-semibold ml-1 border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-pink-600 rounded">CREATE QUESTION</button>
                </Link>
                <Link to="/dashboard/createAnswer">
                  <button className="text-sm text-blackColor1 font-semibold ml-1  border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-pink-600 rounded ml-2">CREATE ANSWERS</button>
                </Link>
              </div>

              <CreateQuestion />

            </div>
          </div>

        </div>

      </div>
    </Fragment>
  )
}

// dashboard.propTypes = {

// }

export default dashboard
