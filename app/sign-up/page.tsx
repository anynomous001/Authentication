import React, { FC } from 'react'
import AuthForm from '../components/AuthForm'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'


interface props { }


const signUp: FC<props> = () => {
    return (
        <div>
            <AuthForm
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
                <Input id='name' placeholder='John Doe' type='name' />

                <Label htmlFor="email">Email</Label>
                <Input id='email' placeholder='John@gmail.com' type='email' />

                <Label htmlFor="password">Password</Label>
                <Input id='password' placeholder='******' type='password' />

            </AuthForm>
        </div>)
}


export default signUp