import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/" className="mr-7">
        Overview
      </Link>
      <Link href="/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
