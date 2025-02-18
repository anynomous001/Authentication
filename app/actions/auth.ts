"use server"

import connectDd from "../lib/db"
import { createNewUser } from "../models/user"
import z from 'zod'

const signUpSchema = z.object({
    name: z.string().trim().min(3, "Name is invalid!"),
    email: z.string().email("Invalid email!"),
    password: z.string().min(6, "Password must be 6 characters long."),
})

type SignUpData = z.infer<typeof signUpSchema>;



export const signUp = async (data: FormData) => {

    const result = signUpSchema.safeParse({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password')
    })

    if (!result.success) {
        console.log(result.error.formErrors.fieldErrors)
    }

    const { name, email, password } = result.data as SignUpData
    await connectDd()
    const user = await createNewUser({ name, email, password, verified: false, provider: "credentials" })

    console.log(user)
}