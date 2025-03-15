'use client';

import { dashboardLinks } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [activeLink, setActiveLink] = useState('Dashboard');
  return(
    <div className="">
       <div className="flex">
          <div className="border-r w-1/4 h-screen pt-12 border-r-[var(--border)] pr-4 space-y-7">
            {dashboardLinks.map((link, index) => {
              return (
                <Link onClick={() => setActiveLink(link.title)} href={link.href} className={`flex items-center gap-4 text-slate-700 px-10 py-4 ${activeLink === link.title && 'bg-gray-200 rounded-r-2xl text-blue-800'} pr-20`} key={index}>
                  <Image
                    src={link.icon}
                    width={24}
                    height={24}
                    alt={link.title}
                  />
                  <p className={`${activeLink === link.title && 'text-blue-700 font-bold'}`}> {link.title} </p>
                </Link>
              );
            })}
          </div>
          <div className="w-3/4">{children}</div>
        </div>
    </div>
  )
}