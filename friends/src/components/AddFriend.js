import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function AddFriend() {
    const history = useHistory()
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const headers = {authorization: localStorage.getItem('token')}
        axios.post('http://localhost:5000/api/friends', form, {headers})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChange}
                    type="textbox"
                    name="name"
                    placeholder="Name"
                    required="true"
                    value={form.name}
                />
                <label htmlFor="age">Age</label>
                <input
                    onChange={handleChange}
                    type="textbox"
                    name="age"
                    placeholder="Age"
                    required="true"
                    value={form.age}
                />
                <label htmlFor="email">Age</label>
                <input
                    onChange={handleChange}
                    type="textbox"
                    name="email"
                    placeholder="Email"
                    required="true"
                    value={form.email}
                />
                <button>Add Friend</button>
            </form>
    )
}