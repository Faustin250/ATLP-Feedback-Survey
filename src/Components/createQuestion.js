import React from 'react'


const createQuestion = props => {
  return (

    <div>

      <div className="header flex justify-center items-left flex-col  shadow w-11/12   sm:w-10/12 md:w-9/12 lg:w-2/6 bg-cool-back-color rounded mt-5">
        <div className=" flex justify-center items-center flex-col p-4">



          <form className="w-full mt-3">
            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs" htmlFor="email">QId
              </label>
              <br />
              <input type="text" class="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" name="email" placeholder="Question id">
              </input>

            </div>
            <div class="mb-1">
              <label class=" text-textColor-900 font-medium font-sans text-xs">QTitle
              </label>
              <br />

              <textarea type="text" className="border-2 border-gray-300 focus:outline-none focus:border-blackColor2 rounded  py-2 px-2 w-full text-textColor-900 font-normal font-sans text-xs" rows="3" placeholder="Enter a brief description.">

              </textarea>

            </div>

            <div className="flex justify-center mt-5 w-full">
              <button class="bg-blackColor1 hover:bg-blackColor2 text-white font-normal py-1.5 px-2 rounded w-full "
                type="submit" value="Login"
              >
                CREATE

              </button>
            </div>

          </form>





        </div>
      </div>
    </div>
  )
}



export default createQuestion
