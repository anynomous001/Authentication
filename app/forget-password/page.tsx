import React, { FC } from 'react'
import AuthForm from '../components/AuthForm'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


interface props { }

const ForgetPassword: FC<props> = () => {
    return (
        <div className=' h-[80vh] flex justify-center items-center'>
            <AuthForm title="Forget Password" btnLabel='Reset Link' footerItems={[{ label: 'Already have an account ?', link: "/sign-in", linkText: "Sign In" }, { label: 'Create a new account ', link: "/sign-up", linkText: "Sign up" }]} >

                <Label htmlFor="email">Enter your email address and we will send you a link to reset your password</Label>
                <Input id='email' placeholder='john@gmail.com' type='email' />

            </AuthForm>

        </div>
    )
}

export default ForgetPassword