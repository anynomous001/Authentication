'use server'

import connectDd from "../lib/db"
import { createNewUser } from "../models/user"
import z from 'zod'

const signUpSchema = z.object({
    name: z.string().trim().min(3, "Name is invalid!"),
    email: z.string().email("Invalid email!"),
    password: z.string().min(6, "Password must be 6 characters long."),
})

type SignUpData = z.infer<typeof signUpSchema>;

interface AuthResponse {
    error?: string;
    errors?: Record<string, string[] | undefined>;
    success?: boolean;
}

export const signUp = async (state: AuthResponse, data: FormData): Promise<AuthResponse> => {



    const result = signUpSchema.safeParse({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password')
    })
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')

    console.log({ name, email, password });

    let user: any

    if (!result.success) {
        return ({ success: false, errors: result.error.formErrors.fieldErrors })
    } else {
        await connectDd()
        const { name, email, password } = result.data
        user = await createNewUser({ name, email, password, verified: false, provider: "credentials" })
        return ({ success: true })
    }

}