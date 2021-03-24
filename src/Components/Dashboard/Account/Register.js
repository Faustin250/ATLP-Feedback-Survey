import React from 'react'
import { Link } from 'react-router-dom';
import googleIcon from '../../../assets/images/icons8-google.svg'

const Register = () => {
  return (

    <div className="flex justify-center items-center flex-col">
      <h1 className="text-textColor-900 font-medium font-sans text-2xl mt-5 mb-5">ATLP Feedback Survey</h1>
      <div className="header flex justify-center items-left flex-col  shadow w-11/12   sm:w-10/12 md:w-9/12 lg:w-2/6 bg-cool-back-color rounded">
        <div className=" flex justify-center items-center flex-col p-4">
          <h1 className="text-textColor-900 font-medium font-sans text-xl">Sign Up</h1>

          <form className="w-full mt-3">

            <div class="mb-1">

              <label class=" text-textColor-900 font-medium font-sans text-xs">Username
              </label>
              <br />
              <input type="text" class="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" name="title" id="title" placeholder="Username">

              </input>
            </div>

            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs">Email
              </label>
              <br />
              <input type="text" class="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" name="title" id="title" placeholder="Email">
              </input>
            </div>
            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs">Password
              </label>
              <br />
              <input type="text" class="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" name="title" id="title" placeholder="Password">
              </input>
            </div>

            <div className="flex justify-center mt-5 w-full">
              <button class="bg-blackColor1 hover:bg-blackColor2 text-white font-normal py-1.5 px-2 rounded w-full ">
                Sign Up

              </button>
            </div>
            <div className="flex justify-center mt-1">
              <p>Or</p>
            </div>
            <div className="flex justify-center mt-1 w-full">
              <button class=" border-2 border-blackColor1 hover:border-blackColor2 text-white font-normal py-1.5 px-2 rounded w-full flex justify-center items-center hover:bg-white ">
                <img className="h-5 w-5 mr-3" src={googleIcon} alt="google" />
                <p className="text-sm text-blackColor1 font-medium"> Continue with Google</p>
              </button>
            </div>

            <div className="flex justify-center mt-3">
              <p className="text-sm text-blackColor1 font-medium">Already have an account?</p>

              <Link to="/dashboard/login">
                <a className="text-sm text-blackColor1 font-semibold ml-1">Sign In</a>
              </Link>
            </div>

          </form>
        </div>

      </div>

    </div>

  )
}

export default Register
