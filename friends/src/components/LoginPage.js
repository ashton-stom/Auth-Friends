import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    const history = useHistory()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        axios.post('http://localhost:5000/api/login', form)
            .then(res => {
                console.log(res)
                if(res.data.payload) {
                    localStorage.setItem('token', res.data.payload)
                    history.push('/friends')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    onChange={handleChange}
                    type="textbox"
                    name="username"
                    placeholder="Username"
                    required="true"
                    value={form.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    onChange={handleChange}
                    type="textbox"
                    name="password"
                    placeholder="Password"
                    required="true"
                    min="6"
                    value={form.password}
                />
                <button>Login</button>
            </form>
        </div>
    )
}
