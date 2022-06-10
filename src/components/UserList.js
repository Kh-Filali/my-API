import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


const UserList = () => {
    const [user, setuser] = useState([])

    const getuser = () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setuser(res.data))
        
    }

    

    useEffect(() => {
        getuser()
    }, [])
    return (
        <div>
              {user.map((el, i) => (<Link to={`/Card/${el.id}`}><h2 key={i}>{el.username}</h2></Link>))}

        </div>
    )
}

export default UserList