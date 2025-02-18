import React, { FC } from 'react'
import AuthForm from '../components/AuthForm'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { signUp } from '@/app/actions/auth'


interface props { }


const SignUp: FC<props> = () => {
    return (
        <div>
            <AuthForm
                action={signUp}
                title="Sign Up"
                btnLabel='Sign Up'
                footerItems={[
                    {
                        label: 'Already have an account ?',
                        link: "/sign-in",
                        linkText: "Sign In"
                    }
                ]} >

                <Label htmlFor="name">Name</Label>
                <Input id='name' placeholder='John Doe' name='name' type='name' />

                <Label htmlFor="email">Email</Label>
                <Input id='email' placeholder='John@gmail.com' name='email' type='email' />

                <Label htmlFor="password">Password</Label>
                <Input id='password' placeholder='******' name='password' type='password' />

            </AuthForm>
        </div>)
}


export default SignUp