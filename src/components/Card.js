import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Card = () => {
    const [usercard, setusercard] = useState({})

    const params=useParams()

    const getTodoById = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setusercard(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodoById()
    }, [params])
    

  return (
    <div>
        <h3>{usercard.name}</h3>
        <h5>{usercard.username}</h5>
        <h5>{usercard.email}</h5>
        <h6>{usercard.phone}</h6>
        <h6>{usercard.website}</h6>
        
        </div>
  )
}

export default Card