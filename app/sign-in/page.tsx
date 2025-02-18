import React, { FC } from 'react'
import AuthForm from '../components/AuthForm'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'


interface props { }

const SignIn: FC<props> = () => {
    return (
        <div>
            <AuthForm
                title="Sign In"
                btnLabel='Login'
                footerItems={[
                    {
                        label: 'Create an account',
                        link: "/sign-up",
                        linkText: "Sign Up"
                    },

                    {
                        label: 'Forget Password',
                        link: "/forget-password",
                        linkText: "Foget Password"
                    }
                ]} >

                <Label htmlFor="email">Email</Label>
                <Input id='email' placeholder='John@gmail.com' type='email' />

                <Label htmlFor="password">Password</Label>
                <Input id='password' placeholder='******' type='password' />

            </AuthForm>
        </div>
    )
}

export default SignIn