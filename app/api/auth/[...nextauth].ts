import NextAuth, { AuthOptions } from "next-auth"


const options: AuthOptions = {
    providers: []
};
export default NextAuth(options)
