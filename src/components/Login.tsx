import {useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../store/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { FC } from 'react'

const Login:FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate ();
    
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export {Login}