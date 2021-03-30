import React from 'react'
import PropTypes from 'prop-types'

const createQuestion = props => {
  return (

    <div>

      <div className="header flex justify-center items-left flex-col  shadow w-11/12   sm:w-10/12 md:w-9/12 lg:w-3/6 bg-cool-back-color rounded mt-5">
        <div className=" flex justify-center items-center flex-col p-4 ">

          <form className="w-full mt-3">


            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs">SelectQ
              </label>
              <br />

              <select className="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs">
                <option>$1,000</option>
                <option>$5,000</option>
                <option>$10,000</option>
                <option>$25,000</option>
              </select>

            </div>



            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs">Create answer
              </label>
              <br />

              <textarea type="text" className="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" rows="3" placeholder="Enter an answer.">

              </textarea>

            </div>


            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs" htmlFor="email">Rate
              </label>
              <br />
              <input type="text" class="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" name="email" placeholder="Rate start from 0">
              </input>

            </div>


            <div className="flex justify-center mt-5 w-full">
              <button class="bg-blackColor1 hover:bg-blackColor2 text-white font-normal py-1.5 px-2 rounded w-full "
                type="submit" value="Login"
              >
                ADD AN ANSWER

              </button>
            </div>

          </form>




        </div>
      </div>
    </div>
  )
}

createQuestion.propTypes = {

}

export default createQuestion
