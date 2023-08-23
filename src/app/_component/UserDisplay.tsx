'use client';

import { useEffect, useState } from "react";

type Usertype = {
  id: number | null,
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

const initialUserData = {
  id: null,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: ''
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  }
}

const UserDisplay = () => {
  const [userData, setUserData] = useState<Usertype>(initialUserData)

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/')
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
    getData().then((data) => {
      setUserData(data)
    })
  }, [])
  
  return (
    <div>
      <p>User Name: {userData.name}</p>
    </div>
  )
}

export default UserDisplay