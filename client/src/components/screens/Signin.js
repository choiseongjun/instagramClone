import React from 'react'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div>
             <div class="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                type="text"
                placeholder="email"
                />
                <input
                type="password"
                placeholder="password"
                />
                <button className="btn waves-effect waves-light">
                    Login
                </button>
                <h5>
                    <Link to="/signup">Dont have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin
