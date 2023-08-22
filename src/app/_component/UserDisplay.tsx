'use client';

import { useEffect, useState } from "react";



interface Usertype {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
}

const UserDisplay = () => {
  const [userData, setUserData] = useState<Usertype | {}>({})

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/')
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
    const res = getData()
    console.log(res);
    setUserData(res);
  }, [])
  
  return (
    <div>
      <p>User Name: {userData.name}</p>
    </div>
  )
}

export default UserDisplay