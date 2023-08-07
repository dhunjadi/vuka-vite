import React from 'react';
import logo from '../../assets/logo.png';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoginForm, loginPageValidationSchema} from './LoginPageValidations';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {User} from '../../types';
import axios from 'axios';
import {setLoggedinUserAction} from '../../store/actions/userActions';
import {useNavigate} from 'react-router-dom';

const LoginPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<LoginForm>({resolver: zodResolver(loginPageValidationSchema)});
    const watchFields = watch();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDisabled = !watchFields.email || !watchFields.password;

    const onSubmit = async ({email, password}: LoginForm) => {
        await axios.post('http://localhost:4000/login', {email, password}).then((res) => {
            dispatch(setLoggedinUserAction(res.data as User));
            navigate('/news');
        });
    };

    return (
        <div className="p-login">
            <div className="p-login__logo">
                <img src={logo} alt="logo" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="example@vuka.hr" id="email" {...register('email')} autoFocus />
                {errors.email && <span>{errors.email.message}</span>}

                <input type="password" placeholder="Password" id="password" {...register('password')} />
                {errors.email && <span>{errors.password?.message}</span>}

                <Button type="submit" disabled={isDisabled}>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
