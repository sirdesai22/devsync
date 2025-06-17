"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/auth";
import { createAuthClient } from "better-auth/client";
import { GrGoogle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const authClient =  createAuthClient()

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await authClient.getSession();
      if (session.data?.user) {
        router.push("/dashboard");
      }
    };

    checkAuth();
  }, [router]);

  const signIn = async (provider: "google" | "github") => {
    const data = await authClient.signIn.social({
        provider: provider
    })
    if (data.data) {
        router.push("/dashboard");
    }
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-black/40 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to DevSync</h1>
        <p className="text-center text-gray-400 mb-6">Sign in to your account to continue</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <GrGoogle className="mr-2 h-7 w-7" />   
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            <FaGithub className="mr-2 h-7 w-7" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
