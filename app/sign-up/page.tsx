'use client'

import React, { FC } from 'react'
import AuthForm from '../components/AuthForm'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { signUp } from '@/app/actions/auth'
import { useFormState } from 'react-dom'


interface props { }


const SignUp: FC<props> = () => {

    const [state, action] = useFormState(signUp, {})

    return (
        <div>
            <AuthForm
                action={action}
                title="Sign Up"
                btnLabel='Sign Up'
                footerItems={[
                    {
                        label: 'Already have an account ?',
                        link: "/sign-in",
                        linkText: "Sign In"
                    }
                ]} >
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input className={`${state.errors?.name ? 'bg-red-600 !text-white font-medium mb-0' : ''}`} id='name' placeholder='John Doe' name='name' type='name' />
                    {state.errors?.name && <p className='text-red-600 mt-0 font-semibold'>{state.errors?.name?.join(', ')}</p>}
                </div>
                <div>

                    <Label htmlFor="email">Email</Label>
                    <Input className={`${state.errors?.email ? 'bg-red-600 !text-white font-medium mb-0' : ''}`} id='email' placeholder='John@gmail.com' name='email' type='email' />
                    {state.errors?.email && <p className='text-red-600 mt-0 font-semibold'>{state.errors?.email?.join(', ')}</p>}

                </div>
                <div>

                    <Label htmlFor="password">Password</Label>
                    <Input className={`${state.errors?.password ? 'bg-red-600 !text-white font-medium mb-0' : ''}`} id='password' placeholder='******' name='password' type='password' />
                    {state.errors?.password && <p className='text-red-600 mt-0 font-semibold'>{state.errors?.password?.join(', ')}</p>}
                </div>

            </AuthForm>
        </div>)
}


export default SignUp