import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LearnMoreButton() {


    return (
    <Link href={"./signup"} className="mt-6  bg-transparent border-2 px-4 py-2 rounded-lg "
    >Learn more < ArrowRight className="ml-2 inline w-4" /></Link>
)}