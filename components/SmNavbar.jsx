import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";

export default function SmNavbar() {
  return (
    <nav className="p-5 fixed w-full bg-myDark">
      <div className="flex space-x-3 hover:opacity-50 duration-200">
        <ArrowLeftIcon className="h-6 fill-current text-myPrimary my-auto"></ArrowLeftIcon>
        <b className="bg-mySecondary bg-gradient-to-br text-transparent from-myPrimary via-myPrimary bg-clip-text text-lg my-auto">
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </b>
      </div>
    </nav>
  );
}
