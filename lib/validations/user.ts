import * as z from 'zod'

export const UserValidation = z.object({
    profile_photo : z.string().url().nonempty( { message: "Profile photo url can not be empty" }),
    username      : z.string().min(3, { message: "Username must have at least 3 characters and no more than 20." }).max(20),
    name      : z.string().min(3, { message: "Username must have at least 3 characters and no more than 20." }).max(20),
    bio      : z.string().min(3, { message: "Username must have at least 3 characters and no more than 20." }).max(200)

})