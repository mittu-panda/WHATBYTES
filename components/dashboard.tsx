"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart3, FileText, LayoutDashboard, Target } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 px-3 py-2 text-sm font-medium ${
        active ? "bg-gray-100 text-blue-600" : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <div className={active ? "text-blue-600" : "text-gray-500"}>{icon}</div>
      {label}
    </div>
  );
};

export default function Dashboard() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [rank, setRank] = useState("4");
  const [percentile, setPercentile] = useState("90");
  const [score, setScore] = useState("10");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-6 flex items-center gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="h-1.5 w-8 bg-black"></div>
            <div className="h-1.5 w-8 bg-black"></div>
            <div className="h-1.5 w-8 bg-black"></div>
          </div>
          <h1 className="text-2xl font-bold">WhatBytes</h1>
        </div>
        <nav className="mt-6 space-y-1 px-2">
          <NavItem icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" />
          <NavItem icon={<Target className="h-5 w-5" />} label="Skill Test" active />
          <NavItem icon={<FileText className="h-5 w-5" />} label="Internship" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6">
        <header className="flex justify-between border-b pb-4">
          <h2 className="text-xl font-medium">Skill Test</h2>
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="Profile" width={40} height={40} className="rounded-full" />
            <span className="font-medium">Rahil Siddique</span>
          </div>
        </header>

        <main className="mt-6 space-y-6">
          <section className="border p-6 rounded-xl bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Hyper Text Markup Language</h3>
              <button
                onClick={() => setIsUpdateModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Update
              </button>
            </div>
          </section>

          {isUpdateModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-medium">Update Scores</h3>
                <div className="mt-4 space-y-4">
                  <label className="block">
                    <span>Update Rank</span>
                    <input
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                      className="w-full border p-2 rounded-md mt-1"
                    />
                  </label>
                  <label className="block">
                    <span>Update Percentile</span>
                    <input
                      value={percentile}
                      onChange={(e) => setPercentile(e.target.value)}
                      className="w-full border p-2 rounded-md mt-1"
                    />
                  </label>
                  <label className="block">
                    <span>Update Score</span>
                    <input
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      className="w-full border p-2 rounded-md mt-1"
                    />
                  </label>
                </div>
                <div className="flex justify-end mt-4 gap-2">
                  <button
                    onClick={() => setIsUpdateModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsUpdateModalOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
