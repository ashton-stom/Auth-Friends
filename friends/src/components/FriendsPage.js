import { useState, useEffect } from 'react';
import axios from 'axios';



export default function FriendsPage() {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const headers = {authorization: localStorage.getItem('token')}
        axios.get('http://localhost:5000/api/friends', {headers})
            .then(res => {
                console.log(res)
                setFriends(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
            })
    }, [])
    return(
        <div>
            {loading && <p>loading...</p>}
            {friends.map(friend => {
                return(<div>{friend.name}   Age: {friend.age}    Email: {friend.email}</div>)
            })}
        </div>
    )
}