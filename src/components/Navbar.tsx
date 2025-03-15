import Image from "next/image"

export default function Navbar(){
    return(
        <nav className="flex border-b border-b-[var(--border)] pb-7 justify-between mt-4 items-center px-4">
            <div className="logo flex gap-2 items-center">
                <Image src="/logo.png" width={42} height={42} alt="Logo" />
                <h1 className="font-bold text-2xl">WhatBytes</h1>
            </div>
            <div className="profile flex items-center gap-2 border rounded-lg py-[2px] px-2 border-[var(--border)]">
                <Image src="/profile.png" width={32} height={32} alt="Profile" />
                <p className="font-bold text-sm">Rahil Siddique</p>
            </div>
        </nav>
    )
}