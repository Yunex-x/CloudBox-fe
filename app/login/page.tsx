"use client";
import React, { useState } from "react";
import { login } from "../services/auth.service";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/layout/footer";
import { Globe, KeySquare, Mail, Menu, UserLock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
const router = useRouter();


    const handlesubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        
        setError("");
        setLoading(true);
 try{
    const res = await login(email, password);
    console.log("Login successful:", res);
    router.push("/dashboard");
    // Handle successful login (e.g., redirect, store token, etc.)
 }catch(err){
    console.error("Login failed:", err);
    setError("Invalid email or password.");
 }finally{
    setLoading(false);
  };
};
    return (
        <>
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
      {/* LEFT: Logo + Desktop Nav */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={60} height={40} />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="#" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Enterprise
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Pricing
            </Link>
          </li>
        </ul>
      </div>

                 <Globe className="h-4 w-4" />

    </nav>
        
            <main className="flex min-h-[80vh] items-center justify-center bg-stone-200 px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

                    {/* Title */}
                    <div className="mb-6 flex items-center gap-2">
                        <UserLock className="h-8 w-8 text-blue-600" />
                        <h1 className="text-2xl font-outfit font-semibold">Log in</h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handlesubmit} className="flex flex-col gap-5">
                        {error && (
                            <p className="text-sm text-red-600 mt-3">
                                {error}
                            </p>
                        )}

                        {/* Email */}
                        <div className="flex items-center gap-3 rounded-md border border-gray-300 px-3 py-2 focus-within:border-blue-500">
                            <Mail className="h-5 w-5 text-gray-500" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                aria-label="Email"
                                className="w-full bg-transparent outline-none placeholder:text-gray-400"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex items-center gap-3 rounded-md border border-gray-300 px-3 py-2 focus-within:border-blue-500">
                            <KeySquare className="h-5 w-5 text-gray-500" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                aria-label="Password"
                                className="w-full bg-transparent outline-none placeholder:text-gray-400"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
                        >
                            {loading ? "Logging In..." : "Log In"}
                        </button>
                    </form>

                    {/* Options */}
                    <div className="mt-4 flex items-center justify-between text-sm">
                        <Link href="#" className="text-blue-600 hover:underline">
                            Forgot your password?
                        </Link>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-blue-600" />
                            <span>Remember me</span>
                        </label>
                    </div>

                    {/* Signup */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link href="./signup" className="font-semibold text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}
