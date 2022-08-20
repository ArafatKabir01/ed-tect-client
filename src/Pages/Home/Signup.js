import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";



const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth)
    const navigate = useNavigate()
    let errorLogin;
    let cheqLoading;
    console.log(user)

    if (error || gerror) {
        errorLogin = <p className='text-red-600'>{error?.message || gerror?.message}</p>
    }
    if (loading || gloading) {
        cheqLoading = <div className='ml-auto mr-auto mt-2'><button className="btn btn-square  loading"></button></div>;
    }
    if(user || guser){
        navigate(from, { replace: true });
    }
        
    let passwordError;
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password,)
        await updateProfile({ displayName: data.displayName })
        navigate('/')
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("displayName", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.displayName?.type === 'required' && "Name is required"}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === 'required' && "Email is required"}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && "Password is required"}
                                <label className="label">
                                    <span className="label-text-alt">Already have an Account? <Link className="link link-hover" to='/login'>Login Please</Link></span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text">Remember me</span>
                                    <input type="checkbox" className="checkbox checkbox-accent" />
                                </label>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignUp</button>
                                </div>
                                {errorLogin}
                                {cheqLoading}
                                {passwordError}
                                <div className="divider">OR</div>
                            </div>
                        </form>
                        <div className="form-control p-4 ">
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-warning">Google Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;