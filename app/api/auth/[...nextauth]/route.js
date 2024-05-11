import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import User from "@/models/User";
import connectDB from "@/config/db";


export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credientals",
      name: "Credientals",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credientals) {
        await connectDB();

        try {
          const user = await User.findOne({ email: credientals.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credientals.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new error(error);
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == "credientals") {
        return user;
      }
    },
  },
};


export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };