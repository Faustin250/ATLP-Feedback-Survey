import React from 'react'
import PropTypes from 'prop-types'
import Navbar2 from './Dashboard/common/Navbar2'
import SideNavbar from './Dashboard/common/SideNavbar'


const dashboard = props => {
  return (
    <div>
      <SideNavbar />
      <div className="relative md:ml-64 bg-gray-200">
        <Navbar2 />
        {/* Header */}
        <div className="relative bg-pink-600 md:pt-32  pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">





            <h1>ijdi</h1>








          </div>
        </div>

      </div>

    </div>
  )
}

dashboard.propTypes = {

}

export default dashboard
