import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

const Login = () => {
    const navigate = useNavigate()  
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            
            if (session) {
                const userData = await authService.getCurrentUser()
                
                if (userData) {
                    const plainUserData = JSON.parse(JSON.stringify(userData));
                    dispatch(authLogin(plainUserData));
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center w-full min-h-[70vh] px-4 py-12 bg-stone-50/20'>
            <div className='mx-auto w-full max-w-md bg-white rounded-2xl p-8 sm:p-10 border border-stone-200/60 shadow-sm'>
                <div className="mb-6 flex justify-center">
                    <span className="inline-block transform hover:scale-102 transition-transform">
                        <Logo width="140px" />
                    </span>
                </div>
                
                <h2 className="text-center text-2xl font-serif font-medium text-stone-900 tracking-tight">
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-stone-500 font-sans">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-rose-700 hover:text-rose-800 transition-colors duration-200 underline underline-offset-4"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && (
                    <div className="mt-6 p-3.5 bg-rose-50 border border-rose-100 rounded-xl">
                        <p className="text-rose-700 text-sm text-center font-medium">
                            {error}
                        </p>
                    </div>
                )}
                
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email Address"
                            placeholder="name@example.com"
                            type="email"
                            className="bg-stone-50/30"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            className="bg-stone-50/30"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full py-3 font-semibold shadow-md"
                            >
                                Sign In
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login