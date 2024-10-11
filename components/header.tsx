import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          {/* <img src="logo/sona-logo.svg" alt="logo" width={100} height={100} /> */}
          Rudi
        </Link>
      </div>
    </div>
  );
}
