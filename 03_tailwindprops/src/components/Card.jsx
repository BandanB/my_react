import React from 'react'
//we dont need to pass props every time ,we can directly pass username
// function Card(props) {
    // console.log("props",props);
    // console.log(props.username);
    function Card({username,btnText="visit me"}) {
        console.log(username,btnText);
  return (
    <div>
     <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText} →
    </button>
  </div>
</div>
 
    </div>
  )
}

export default Card
