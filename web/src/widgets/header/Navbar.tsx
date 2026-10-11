import { HEADER_DATA } from "@/config/header.data";
import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {HEADER_DATA.map((item) => (
          <li key={item.label}>
            <NavbarItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
