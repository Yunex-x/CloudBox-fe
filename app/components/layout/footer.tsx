import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-5 py-12 text-white">
      <div className="mx-auto grid grid-cols-2 max-w-7xl gap-8  md:grid-cols-3 lg:grid-cols-6">
        {/* Column 1 */}
        <ul className="flex flex-col gap-3">
          <li className="mb-3 text-lg font-semibold">CloudBox</li>
          <li><a href="#" className="hover:underline">Desktop app</a></li>
          <li><a href="#" className="hover:underline">Mobile app</a></li>
          <li><a href="#" className="hover:underline">Integrations</a></li>
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Solutions</a></li>
          <li><a href="#" className="hover:underline">Security</a></li>
          <li><a href="#" className="hover:underline">Early access</a></li>
          <li><a href="#" className="hover:underline">Templates</a></li>
          <li><a href="#" className="hover:underline">Free tools</a></li>
        </ul>

        {/* Column 2 */}
        <ul className="flex flex-col gap-3">
          <li className="mb-3 text-lg font-semibold">Products</li>
          <li><a href="#" className="hover:underline">Plus</a></li>
          <li><a href="#" className="hover:underline">Professional</a></li>
          <li><a href="#" className="hover:underline">Business</a></li>
          <li><a href="#" className="hover:underline">Enterprise</a></li>
          <li><a href="#" className="hover:underline">Dash</a></li>
          <li><a href="#" className="hover:underline">Reclaim.ai</a></li>
          <li><a href="#" className="hover:underline">Dropbox Sign</a></li>
          <li><a href="#" className="hover:underline">DocSend</a></li>
          <li><a href="#" className="hover:underline">Plans</a></li>
        </ul>

        {/* Column 3 */}
        <ul className="flex flex-col gap-3">
          <li className="mb-3 text-lg font-semibold">Features</li>
          <li><a href="#" className="hover:underline">Send large files</a></li>
          <li><a href="#" className="hover:underline">Send long videos</a></li>
          <li><a href="#" className="hover:underline">Cloud photo storage</a></li>
          <li><a href="#" className="hover:underline">Secure file transfer</a></li>
          <li><a href="#" className="hover:underline">Cloud backup</a></li>
          <li><a href="#" className="hover:underline">Edit PDFs</a></li>
          <li><a href="#" className="hover:underline">Electronic signatures</a></li>
          <li><a href="#" className="hover:underline">Convert to PDF</a></li>
        </ul>

        {/* Column 4 */}
        <ul className="flex flex-col gap-3">
          <li className="mb-3 text-lg font-semibold">Support</li>
          <li><a href="#" className="hover:underline">Help center</a></li>
          <li><a href="#" className="hover:underline">Contact us</a></li>
          <li><a href="#" className="hover:underline">Privacy & terms</a></li>
          <li><a href="#" className="hover:underline">Cookie policy</a></li>
          <li><a href="#" className="hover:underline">Cookies & CCPA preferences</a></li>
          <li><a href="#" className="hover:underline">AI principles</a></li>
          <li><a href="#" className="hover:underline">Sitemap</a></li>
          <li className="font-semibold">Learning resources</li>
        </ul>

        {/* Column 5 */}
        <ul className="flex flex-col gap-3">
          <li className="mb-3 text-lg font-semibold">Resources</li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Events</a></li>
          <li><a href="#" className="hover:underline">Customer stories</a></li>
          <li><a href="#" className="hover:underline">Resources library</a></li>
          <li><a href="#" className="hover:underline">Developers</a></li>
          <li><a href="#" className="hover:underline">Community forums</a></li>
          <li><a href="#" className="hover:underline">Referrals</a></li>
          <li><a href="#" className="hover:underline">Reseller partners</a></li>
          <li><a href="#" className="hover:underline">Integration partners</a></li>
          <li><a href="#" className="hover:underline">Find a partner</a></li>
        </ul>

        {/* Column 6 – Company */}
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-col gap-3">
            <li className="mb-3 text-lg font-semibold">Company</li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Investor relations</a></li>
            <li><a href="#" className="hover:underline">Our impact</a></li>
          </ul>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex gap-4">
              <Link href="#"><Facebook size={18} /></Link>
              <Link href="#"><Twitter size={18} /></Link>
              <Link href="#"><Youtube size={18} /></Link>
            </div>

            <hr className="w-32 border-gray-700" />

            <select className="w-fit rounded-md border border-gray-600 bg-black px-2 py-1 text-sm text-white">
              <option value="en">English</option>
              <option value="en">Spanish</option>
              <option value="en">French</option>
              <option value="en">German</option>
              <option value="en">Chinese</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
