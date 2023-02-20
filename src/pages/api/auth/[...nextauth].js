import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "Models/userModel";
import md5 from "md5";
import connectMongo from "Database/conn";
export const authOptions = {
    pages: {
        signIn: '/login'
    },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {
                connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))
                const { username, password } = credentials;
                const user = await Users.findOne({ username }).exec()
                const isPasswordMatched = await user.password == md5(password) ? true : false
                if (user && isPasswordMatched) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    // callbacks: {
    //     async session({ session, user, token }) {
    //         if(user && user.id){
    //             session.user.id = user.id
    //         }
    //         return session
    //     },
    //     async jwt({ token, user, account, profile, email, credentials }) {
    //         if (user && user._id) {
    //             token.id = user._id
    //         }
    //         return token
    //     }
    // }
}
export default NextAuth(authOptions)