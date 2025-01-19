import NextAuth, { AuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { hash } from "bcrypt";
// Extend the default session user type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
    };
  }

  interface User {
    id: string;
    email: string;
  }
}

// Extend the default JWT token type
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
  }
}

// Type conversion function
function convertToNextAuthUser(user: {
  id: string;
  email: string;
}): NextAuthUser {
  return {
    id: user.id.toString(),
    email: user.email,
  };
}

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.admin.findUnique({
          where: {
            email: credentials.email,
          },
        });

        const password = await hash(credentials.password, 10);
        console.log("password", password);
        if (!user) {
          console.error("No user found");
          return null;
        }

        const isCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (isCorrect) {
          // Convert to NextAuth User type
          return convertToNextAuthUser(user);
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add user info to the token on first login
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      // Add token info to the session
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
