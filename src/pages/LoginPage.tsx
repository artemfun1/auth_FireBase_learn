import { FC } from 'react'
import { Login } from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage:FC = () => {
    
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </div>
    )
}

export default LoginPage