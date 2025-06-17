import { betterAuth } from "better-auth"
 
export const auth = betterAuth({
    socialProviders: { 
        google: {
            enabled: true,
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
        // github: {
        //     enabled: true,
        //     clientId: process.env.GITHUB_CLIENT_ID!,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        // },
    }, 
});