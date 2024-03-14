import React, { useEffect, useState } from 'react'


function Github() {
   
    const [data, setData] = useState([])
     useEffect(() => {
      fetch('https://api.github.com/users/Ashu001234')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         setData(data)
      })
     }, [])
  return (
    <div className='text-centre bg-gray-600 text-white px-3  text-center text-3xl'>Github Followers : {data.followers} 
    <img src={data.avatar_url} alt=" Git picture" width={300} />
    
    </div> 
  )
}

export default Github