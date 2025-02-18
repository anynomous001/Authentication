import { auth } from "@/auth"


const page = async () => {
    const session = await auth()

    session ? console.log("Logged In") : console.log("Logged Out")

    return (
        <div>
            {session ? (
                <div>
                    <h1>Welcome {session?.user?.name}</h1>
                </div>
            ) : (
                " please log in"
            )}
        </div>
    )


}

export default page