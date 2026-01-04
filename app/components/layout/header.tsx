import { Menu, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between border-b border-blue-200/70 bg-white/85 px-4 py-2 shadow-md shadow-blue-500/20 backdrop-blur">
      {/* LEFT: Logo + Desktop Nav */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={40}
            className="h-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-800">
          <li>
            <Link href="#" className="hover:text-blue-700">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-700">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-700">
              Enterprise
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-700">
              Pricing
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4 text-sm text-slate-800">
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <Globe className="h-4 w-4 text-blue-700" />

          <Link href="#" className="hover:text-blue-700">
            Contact sales
          </Link>
          <Link href="#" className="hover:text-blue-700">
            Download app
          </Link>
          <Link href="./signUp" className="hover:text-blue-700">
            Sign up
          </Link>
          <Link href="./login" className="hover:text-blue-700">
            Log in
          </Link>

          <Link
            href="./signUp"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-sm shadow-blue-500/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:ring-offset-2 focus:ring-offset-white"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu */}
        <Menu className="h-6 w-6 md:hidden text-slate-800" />
      </div>
    </nav>
  );
}