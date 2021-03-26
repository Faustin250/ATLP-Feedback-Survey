import React from 'react'

const SubmitPage = () => {
  return (

    <div className="flex justify-center items-center flex-col">
      <h1 className="text-textColor-900 font-medium font-sans text-2xl mt-5 mb-5">ATLP Feedback Survey</h1>
      <div className="header flex justify-center items-left flex-col p-3 shadow w-11/12   sm:w-10/12 md:w-9/12 lg:w-6/12 bg-cool-back-color">

        <div className=" flex justify-center items-center flex-col p-4">
          <h1 className="text-textColor-900 font-medium font-sans text-xl">Thank you very much !</h1>
          <p className="text-textColor-900 font-medium text-center font-sans text-sm pt-1" >We really appreciate that you are taking your time to share your experiences with us.We hope to use your answers to make the next ATLP more exciting</p>
        </div>

      </div>

    </div>

  )
}

export default SubmitPage
