import http from "@/lib/axios";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Your Email" },
        password: { label: "Password", type: "password" },
      },
    //signIn関数呼び出し時に実行される
      async authorize(credentials) {
        try {
            const res = await http.get('/sanctum/csrf-cookie');

            const setCookieHeader = res.headers["set-cookie"];

            let sessionKey = null;
            let xsrfToken = null;

            for (const cookie of setCookieHeader!) {
                if (cookie.startsWith("laravel_session=")) {
                    sessionKey = cookie.split("=")[1].split(";")[0];
                } else if (cookie.startsWith("XSRF-TOKEN=")) {
                    xsrfToken = cookie.split("=")[1].split(";")[0];
                }
            }

            const data = {
                email: credentials?.email,
                password: credentials?.password,
            };

            const headers: { [key: string]: string } = {
                'Cookie': `laravel_session=${sessionKey}`,
                'Content-Type': 'application/json'
            };

            if (xsrfToken) headers['X-XSRF-TOKEN'] = xsrfToken;


            const options = {
                headers:headers,
            }

            const response = await http.post('/api/login', data, options);

            return response.data;
        } catch (error) {
          console.log("Error", error)
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
        token.accessToken = user.access_token
      }
      return token
    },
    async session({ session, token }) {
    //   session.accessToken = token.access_token
    session.user = token.user
    console.log('session コールバック　' + JSON.stringify(session.user.access_token))
      return session
    },
  },
}
export const handler = NextAuth(authOptions)
