"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f0f0f0" }}>
            <Link href="/">Home</Link>
            <Link href="/leagues">Leagues</Link>
            <Link href="/teams">My Teams</Link>
            <Link href="/account">My Account</Link>
        </nav>
    );
}