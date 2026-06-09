"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Programmes", "/programmes"],
  ["Our impact", "/impact"],
  ["Stories", "/stories"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Evergreen Arts Centre home">
        <Image
          alt=""
          height={52}
          priority
          src="/brand/evergreen-arts-symbol-transparent.webp"
          width={47}
        />
        <span>
          <strong>everGreen</strong>
          <small>Arts Centre</small>
        </span>
      </Link>
      <nav aria-label="Main navigation" className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href="/get-involved" onClick={() => setOpen(false)}>
          Get involved
        </Link>
      </nav>
      <button
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
