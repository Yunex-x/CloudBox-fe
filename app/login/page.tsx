"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { login } from "../services/auth.service";
import Footer from "../components/layout/footer";
import { Globe, KeySquare, Mail, UserLock, Menu } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await login(email, password);
      console.log("Login successful:", res);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header with matching light/blue styling */}
        <nav className="flex items-center justify-between border-b border-blue-200/70 bg-white/85 px-4 py-2 shadow-md shadow-blue-500/20 backdrop-blur">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={60} height={40} className="h-auto" />
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-800">
            <li><Link href="#" className="hover:text-blue-700">Products</Link></li>
            <li><Link href="#" className="hover:text-blue-700">Solutions</Link></li>
            <li><Link href="#" className="hover:text-blue-700">Enterprise</Link></li>
            <li><Link href="#" className="hover:text-blue-700">Pricing</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-slate-800">
          <Globe className="h-4 w-4 text-blue-700" />
          <Menu className="h-6 w-6 md:hidden text-slate-800" />
        </div>
      </nav>

      {/* Main */}
      <main className="flex min-h-[80vh] items-center justify-center  px-4 py-12">
        <div className=" mx-auto max-full m gap-10  ">
          <div className="absolute inset-0 rounded-2xl  bg-white/40 blur-2xl opacity-50" />
          <div className="relative rounded-2xl border w-100 h-150 border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex items-center gap-2">
              <UserLock className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-semibold text-slate-900">Log in</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {error && (
                <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-800">
                  {error}
                </p>
              )}

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/40">
                <Mail className="h-5 w-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/40">
                <KeySquare className="h-5 w-5 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  aria-label="Password"
                  className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            <div className="mt-10 mb-20 flex items-center justify-between text-sm text-slate-700">
              <Link href="#" className="font-semibold text-blue-700 hover:text-blue-600">
                Forgot your password?
              </Link>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-600" />
                <span>Remember me</span>
              </label>
            </div>

            <p className=" text-center text-sm text-slate-700">
              Don&apos;t have an account?{" "}
              <Link href="./signup" className="font-semibold text-blue-700 hover:text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}