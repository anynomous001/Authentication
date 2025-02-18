import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { redirect } from "next/navigation"

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/sign-in",
        newUser: "/sign-up"
    },
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
                },
                number: {
                    label: "Number",
                    type: "text",
                    placeholder: "123456"
                }
            },
            edentials: any) {
                const { email, password } = credentials
            async authorize(cr

                if(email === "me@gmail.com" && password === "123456") {

        redirect("/dashboard")

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


