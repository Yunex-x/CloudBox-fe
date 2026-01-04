import { Globe, Section } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/layout/footer";

export default function SignUpPage() {
    return (
        <>
            <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2 shadow-xs shadow-lime-800">
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
            <section className="min-h-screen flex flex-col items-center  p-8">
                <h1 className="text-4xl font-bold">Sign Up Page</h1>
                <form className=" w-full max-w-md mt-8 bg-white p-6 rounded-lg shadow-2xl">
                    <div className="flex flex-col mb-4 gap-4">
                        <input type="email"
                            id="email"
                            aria-label="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <input type="lastname"
                            id="lastname"
                            aria-label="lastname"
                            placeholder="Last Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <input type="date"
                            id="date"
                            aria-label="date"
                            placeholder="Date of Birth"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <input type="phone"
                            id="phone"
                            aria-label="phone"
                            placeholder="Phone Number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <input type="password"
                            id="password"
                            aria-label="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <input type="password"
                            id="confirm-password"
                            aria-label="confirm-password"
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-4">Sign Up</button>
                    <h1 className="text-lg text-center mt-4">Or</h1>
                    <Link href="#" className="w-full mt-4 bg-stone-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300 text-center block">
                        Continue with Google
                    </Link>
                    <h1 className="text-sm text-center mt-4">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Log In
                        </Link>
                    </h1>
                    <hr className="my-6" />

                    <p className="text-xs text-center mt-8 text-gray-500">
                        By signing up, you agree to our{' '}
                        <Link href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </Link>.
                    </p>
                </form>






            </section>
            <Footer />


        </>
    )
}