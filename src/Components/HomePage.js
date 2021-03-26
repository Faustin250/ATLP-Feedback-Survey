import React from 'react'
import image from './../assets/images/pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (

    <div className="flex justify-center items-center flex-col">
      <h1 className="text-textColor-900 font-medium font-sans text-2xl mt-5 mb-5">ATLP Feedback Survey</h1>
      <div className="header flex justify-center items-left flex-col p-3 shadow w-11/12   sm:w-10/12 md:w-9/12 lg:w-6/12 bg-cool-back-color">
        <div className=" flex justify-center items-center flex-col pt-4">
          
          <p className="text-textColor-900 font-medium text-center font-sans text-sm pt-1" >We are working hard to make the next ATLP better. We would like to ask you to share your experience with us. Your answers will help us understand what we need to improve</p>
        </div>

        <ul className="pt-5 list-decimal pl-4">

          <div className="pt-2">
            <li className="text-textColor-900 font-normal font-sans text-xs">What can you tell us about the capstone project you worked on during the bootcamp phase
            </li>

            <div className="flex justify-center items-left flex-col  pt-1">
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">It was easy to understand the requirements and start implementation</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">
                  It was slightly easy to understand the requerements and start implementation
                </span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">It took me a
                long time to understand the requirements and start implementation
             </span>
              </label>

            </div>

          </div>

          <div className="pt-2">
            <li className="text-textColor-900 font-normal font-sans text-xs">  
            Tell us how confident are you with working with Git
            
            </li>

            <div className="flex justify-center items-left flex-col   pt-1">
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType1" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">
                I am very confident</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType1" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs"> I am confident</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType1" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs"> 
                I am slightly confident
                </span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType1" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs"> 
                I am not confident
                </span>
              </label>
            </div>
          </div>

          <div className="pt-2">
            <li className="text-textColor-900 font-normal font-sans text-xs"> 
            How prepared well you before joining the bootcamp
            </li>
            <div className="flex justify-center items-left flex-col   pt-1">
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType2" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">Very prepared</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType2" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">prepared</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType2" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs">slightly prepared</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType2" value="personal" />
                <span class="ml-2 text-textColor-900 font-normal font-sans text-xs"> not prepared</span>
              </label>
            </div>

          </div>

          
        </ul>
       
        <div className="flex justify-center mt-5 w-11/12 sm:justify-end">
          <button class="bg-blackColor1 hover:bg-blackColor2 text-white font-normal py-1 px-2 rounded w-9/12 sm:w-1/4 ">
            <Link to="/submit">
              SUBMIT
            </Link>
            
           
                
         </button>
       </div>

      </div>
     
    </div>

  )
}

export default HomePage
