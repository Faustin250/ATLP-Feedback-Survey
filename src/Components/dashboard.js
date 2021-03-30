import React from 'react'
// import PropTypes from 'prop-types'
import Navbar from './Dashboard/common/Navbar'
import SideNavbar from './Dashboard/common/SideNavbar'


const dashboard = props => {
  return (
    <div>
      <SideNavbar />
      <div className="relative md:ml-64 bg-gray-200">
        <Navbar />
        {/* Header */}
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words h-full bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4 ">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-gray-500 uppercase font-bold text-xs">
                            Participants
                          </h5>
                          <span className="font-semibold text-xl text-gray-800">
                            350,897
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                            <i className="fas fa-users"></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg h-full">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-gray-500 uppercase font-bold text-xs">
                            Statistics
                          </h5>
                          <span className="font-semibold text-xl text-gray-800">
                            924
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                            <i className="fas fa-signal"></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-gray-500 uppercase font-bold text-xs">
                            Users
                          </h5>
                          <span className="font-semibold text-xl text-gray-800">
                            10
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                            <i className="fas fa-users"></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

// dashboard.propTypes = {

// }

export default dashboard
