import React from 'react'

const HomePage = (props) => {
  return (
    <div>
      <h1 className=" text-cool-back-color">{props.name}</h1>
    </div>
  )
}

export default HomePage


// import React from 'react'

// function HomePage(props) {
//   return (
//     <h1 className=" text-cool-back-color">{props.name}</h1>
//   )
// }

// export default HomePage