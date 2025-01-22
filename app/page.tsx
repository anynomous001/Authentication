'use client'

import { auth } from "@/auth";
import AuthForm from "./components/AuthForm";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  const user = session?.user

  return (
    <div className="">
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        " please log in"
      )}
      {/* <AuthForm /> */}
    </div>
  );
}
