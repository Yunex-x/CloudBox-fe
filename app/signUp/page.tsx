"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/layout/footer";
import { Globe, KeySquare, Mail, UserLock, Menu } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // TODO: Replace with your sign-up logic (API call, auth SDK, etc.)
    console.log("Sign up payload:", form);
  };

  const signInWithProvider = (provider: "google" | "github") => {
    // TODO: Replace with your OAuth flow (e.g., next-auth signIn(provider))
    console.log(`Sign up with ${provider}`);
  };

  return (
    <>
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
    <div className="min-h-screen  text-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full mx-auto max-w-xl gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-white/40 blur-2xl opacity-50" />
          <div className="relative rounded-2xl border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Create your account</h2>
                <p className="text-sm text-slate-700">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-blue-700 hover:text-blue-600">
                    Sign in
                  </Link>
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-500/30">
                New
              </span>
            </div>

            <form className="mt-8 space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-800">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={form.firstName}
                    onChange={onChange}
                    className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 placeholder:text-slate-400"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-800">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={form.lastName}
                    onChange={onChange}
                    className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 placeholder:text-slate-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-800">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 placeholder:text-slate-400"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium text-slate-800">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={form.password}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 placeholder:text-slate-400"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-800">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={form.confirmPassword}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 placeholder:text-slate-400"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-800" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 active:scale-[0.99]"
              >
                Sign up
              </button>
            </form>

            <div className="mt-6">
              <div className="relative flex items-center">
                <div className="w-full border-t border-slate-200/70" />
                <span className="mx-3 text-xs uppercase tracking-[0.2em] text-slate-600">
                  Or
                </span>
                <div className="w-full border-t border-slate-200/70" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => signInWithProvider("google")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-white"
                  type="button"
                >
                  <svg className="h-5 w-5" viewBox="0 0 488 512" aria-hidden="true" fill="currentColor">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 8 391.3 8 256S110.8 8 248 8c66.8 0 123 24.5 166.1 64.9l-67.3 64.9C295.5 94.6 215.6 95 163 143.6c-30.5 28.5-47.9 68.3-47.9 112.4 0 43.3 17.7 83.6 47.9 112.3 52.3 48.7 132.3 49 184.4 1.2 18.4-17.2 30.6-41.4 34.5-67.2H248v-89.2h240c2.2 12.7 4 25.6 4 40.7z" />
                  </svg>
                  Google
                </button>
                <button
                  onClick={() => signInWithProvider("github")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-white"
                  type="button"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.19a11.08 11.08 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.58.24 2.75.12 3.04.74.81 1.18 1.85 1.18 3.11 0 4.44-2.71 5.41-5.29 5.69.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A10.98 10.98 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer />
    </>
  );
}