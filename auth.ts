import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "john@gmail.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "********"
                }
            },

            async authorize(credentials: any) {
                const { email, password } = credentials

                if (email === "me@gmail.com" && password === "123456") {
                    return {
                        id: 1,
                        name: "Me",
                        email: "me@gmail.com",
                    }
                }


                throw new CredentialsSignin("Invalid email or password")
            }
        })

    ],
})


