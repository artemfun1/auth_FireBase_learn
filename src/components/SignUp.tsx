// import {useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../store/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp:FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}