import React from 'react'
import PropTypes from 'prop-types'
import Navbar2 from './Dashboard/common/Navbar2'
import SideNavbar from './Dashboard/common/SideNavbar'
import { Link } from "react-router-dom";


const dashboard = props => {
  return (
    <div>
      <SideNavbar />
      <div className="relative md:ml-64 bg-gray-200">
        <Navbar2 />
        {/* Header */}
        <div className="relative  bg-cool-back-color md:pt-32  pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">

            <div>

              {/* <Link to="/submit" class="bg-blackColor1 hover:bg-blackColor2 text-white font-normal py-1.5 px-2 rounded w-full ">
                SUBMIT
            </Link> */}

              <Link to="/dashboard/createQuestion">
                <a className="text-sm text-blackColor1 font-semibold ml-1 hover:">Create Questions</a>
              </Link>

              <Link to="/dashboard/createAnswer">
                <a className="text-sm text-blackColor1 font-semibold ml-1 hover:">Create Answers</a>
              </Link>

            </div>

            <div>

              <h1></h1>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

dashboard.propTypes = {

}

export default dashboard
