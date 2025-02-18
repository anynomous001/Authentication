'use client'

import { signOut } from "@/auth"
// import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <div className="flex max-w-screen justify-between p-6 border-b-2 border-y-black ">
            <div className=" border-b-2 border-y-black  ">
                <h2 className="font-bold text-2xl  ">Auth</h2>
            </div>
            <button onClick={() => signIn()}>Built In Sign In</button>

            {
                session ? (
                    <button onClick={() => signOut()}>Sign Out</button>
                ) : (
                    <div className="flex gap-4 w-[200px] pr-8  ">
                        <Link href={'/sign-up'}>
                            <Button >Sign Up</Button>
                        </Link>
                        <Link href={'/sign-in'}>
                            <Button >Log In</Button>
                        </Link>
                    </div>
                )


            }


        </div>
    )
}

export default Navbar