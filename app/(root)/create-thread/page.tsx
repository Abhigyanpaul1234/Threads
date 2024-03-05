import { currentUser } from "@clerk/nextjs"
import { Redirect } from "next"
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/dist/server/api-utils";
import PostThread from "@/components/forms/PostThread";



async function Page() {
    const user = await currentUser();

    if (!user) return null


    const userInfo = await fetchUser(user.id)

    if (!userInfo?.onboarded) redirect('/onboarding')

    return (
        <>
            <h1 className="head-text">Create Thread</h1>

            <PostThread userId = {userInfo._id}/>
        </>
    )
}


export default Page