import type React from "react"
import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="h-1.5 w-8 bg-black"></div>
            <div className="h-1.5 w-8 bg-black"></div>
            <div className="h-1.5 w-8 bg-black"></div>
          </div>
          <h1 className="text-2xl font-bold">WhatBytes</h1>
        </div>
      </div>
      <nav className="mt-6 space-y-1 px-2">
        <NavItem href="/" label="Dashboard" icon={<DashboardIcon />} />
        <NavItem href="/skill-test" label="Skill Test" icon={<SkillTestIcon />} active />
        <NavItem href="/internship" label="Internship" icon={<InternshipIcon />} />
      </nav>
    </aside>
  )
}

interface NavItemProps {
  href: string
  label: string
  icon: React.ReactNode
  active?: boolean
}

function NavItem({ href, label, icon, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
        active ? "bg-gray-100 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div className={active ? "text-blue-600" : "text-gray-500"}>{icon}</div>
     <p className="font-bold text-medium"> {label}</p>
    </Link>
  )
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  )
}

function SkillTestIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  )
}

function InternshipIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}

export default Sidebar

