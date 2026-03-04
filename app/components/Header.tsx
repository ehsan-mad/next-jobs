import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex h-[72px] items-center justify-between bg-white px-4 md:px-16 lg:px-32">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="QuickHire Logo"
                        width={160}
                        height={40}
                        className="h-9 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
                <Link
                    href="/find-jobs"
                    className="font-epilogue text-base font-medium text-grey transition-colors hover:text-primary"
                >
                    Find Jobs
                </Link>
                <Link
                    href="/find-jobs"
                    className="font-epilogue text-base font-medium text-grey transition-colors hover:text-primary"
                >
                    Browse Companies
                </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="font-epilogue text-base font-bold text-primary transition-colors hover:opacity-80 cursor-pointer">
                    Login
                </button>
                <div className="h-10 w-[1px] bg-[#D6DDEB]" />
                <button className="h-[50px] bg-primary px-6 font-epilogue text-base font-bold text-white transition-opacity hover:opacity-90 cursor-pointer">
                    Sign Up
                </button>
            </div>
        </header>
    );
}
