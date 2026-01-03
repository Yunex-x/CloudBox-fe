import { Menu, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4 text-sm">
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <Globe className="h-4 w-4" />

          <Link href="#" className="hover:underline">
            Contact sales
          </Link>
          <Link href="#" className="hover:underline">
            Download app
          </Link>
          <Link href="./signup">Sign up</Link>
          <Link href="./login">Log in</Link>

          <Link
            href="./signup"
            className="rounded-full bg-blue-600 px-4 py-2 text-white text-lg hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu */}
        <Menu className="h-6 w-6 md:hidden" />
      </div>
    </nav>
  );
}
