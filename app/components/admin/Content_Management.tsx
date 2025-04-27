// app/admin/content-management/page.jsx
"use client";

import { useState } from "react";

export default function ContentManagement() {
  const contentSections = [
    {
      title: "Songs Management",
      description: "Manage all songs uploaded by artists.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      total: 540,
      pending: 23,
      reports: 5,
      status: "Active",
    },
    {
      title: "Videos Management",
      description: "Oversee artist music videos and approvals.",
      image: "https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total: 320,
      pending: 10,
      reports: 2,
      status: "Needs Attention",
    },
    {
      title: "Albums Management",
      description: "Curate and edit albums released by artists.",
      image: "https://plus.unsplash.com/premium_photo-1682124293900-54bea8ca7e9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total: 120,
      pending: 5,
      reports: 1,
      status: "Active",
    },
    {
      title: "Playlists Management",
      description: "Create admin-curated playlists for fans.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxwbGF5bGlzdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
      total: 75,
      pending: 2,
      reports: 0,
      status: "Active",
    },
    {
      title: "Genres Management",
      description: "Manage genres for better discovery.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      total: 25,
      pending: 0,
      reports: 0,
      status: "Active",
    },
    {
      title: "Featured Content",
      description: "Highlight songs and videos for users.",
      image: "https://plus.unsplash.com/premium_photo-1733749585363-062125288d04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZ1dHVyZSUyMGNvbnRlbnR8ZW58MHx8MHx8fDA%3D",
      total: 18,
      pending: 1,
      reports: 0,
      status: "Needs Attention",
    },
    {
      title: "Banners && Promotions",
      description: "Manage promotional banners and events.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      total: 12,
      pending: 0,
      reports: 0,
      status: "Active",
    },
    {
      title: "Artist Applications",
      description: "Approve or reject new artist signups.",
      image: "https://plus.unsplash.com/premium_photo-1721225464894-46e7bb29e446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
      total: 56,
      pending: 7,
      reports: 0,
      status: "Needs Attention",
    },
    {
      title: "Reported Content",
      description: "Handle reported songs and videos.",
      image: "https://images.unsplash.com/photo-1717994818194-5760d533cab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJlcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
      total: 42,
      pending: 0,
      reports: 12,
      status: "Needs Attention",
    },
    {
      title: "Copyright Claims",
      description: "Manage copyright issues and claims.",
      image: "https://plus.unsplash.com/premium_photo-1745610507944-4b6ad888581d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGNvcHklMjByaWdodHMlMjBjbGFpbXxlbnwwfHwwfHx8MA%3D%3D",
      total: 15,
      pending: 1,
      reports: 5,
      status: "Active",
    },
  ];

  return (
    <div className="bg-[#1B1C21] p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-8 text-left">
        Content Management
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contentSections.map((section, index) => (
          <div
            key={index}
            className="bg-[#292929] rounded-2xl shadow-md hover:bg-[#3A3A3A] duration-300 shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={section.image}
              alt={section.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-white">
                    {section.title}
                  </h2>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      section.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {section.status}
                  </span>
                </div>
                <p className="text-sm text-white mb-4">{section.description}</p>

                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div>
                    <p className="text-gray-500 text-xs">Total</p>
                    <p className="font-bold">{section.total}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Pending</p>
                    <p className="font-bold">{section.pending}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Reports</p>
                    <p className="font-bold">{section.reports}</p>
                  </div>
                </div>
              </div>

              <button className="mt-auto w-full bg-[#FF5E69] hover:bg-gradient-to-r from-[#650077] to-[#AE008E] text-white py-2 rounded-lg text-sm font-medium transition">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
