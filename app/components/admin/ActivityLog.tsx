import React, { useState } from "react";
import {
  Avatar,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

type Activity = {
  id: string;
  user: string;
  role: "Admin" | "Artist" | "Fan";
  avatar: string;
  activity: string;
  timestamp: string;
  status: "Success" | "Failed";
  device: string;
  ip: string;
};

const activitiesData: Activity[] = [
  {
    id: "ACT1001",
    user: "Sophia Martinez",
    role: "Artist",
    avatar: "https://source.unsplash.com/50x50/?woman,artist",
    activity: "Uploaded a new MP3: 'Dream Chaser'",
    timestamp: "2025-04-25 10:30 AM",
    status: "Success",
    device: "Desktop",
    ip: "192.168.1.10",
  },
  {
    id: "ACT1002",
    user: "Jacob Wilson",
    role: "Fan",
    avatar: "https://source.unsplash.com/50x50/?man,fan",
    activity: "Upgraded to Premium Subscription",
    timestamp: "2025-04-24 04:15 PM",
    status: "Success",
    device: "Mobile",
    ip: "192.168.1.20",
  },
  {
    id: "ACT1003",
    user: "Admin",
    role: "Admin",
    avatar: "https://source.unsplash.com/50x50/?admin,man",
    activity: "Blocked artist 'The Vibes'",
    timestamp: "2025-04-24 11:00 AM",
    status: "Success",
    device: "Desktop",
    ip: "192.168.1.5",
  },
  {
    id: "ACT1004",
    user: "Sophia Martinez",
    role: "Artist",
    avatar: "https://source.unsplash.com/50x50/?woman,singer",
    activity: "Updated profile information",
    timestamp: "2025-04-23 03:45 PM",
    status: "Success",
    device: "Mobile",
    ip: "192.168.1.12",
  },
  {
    id: "ACT1005",
    user: "Admin",
    role: "Admin",
    avatar: "https://source.unsplash.com/50x50/?admin,profile",
    activity: "Created a new Subscription Plan: 'Platinum VIP'",
    timestamp: "2025-04-23 01:20 PM",
    status: "Success",
    device: "Desktop",
    ip: "192.168.1.5",
  },
  {
    id: "ACT1006",
    user: "Emily Brown",
    role: "Fan",
    avatar: "https://source.unsplash.com/50x50/?woman,listener",
    activity: "Reported song 'Broken Dreams'",
    timestamp: "2025-04-22 08:10 PM",
    status: "Success",
    device: "Mobile",
    ip: "192.168.1.33",
  },
  {
    id: "ACT1007",
    user: "David Johnson",
    role: "Artist",
    avatar: "https://source.unsplash.com/50x50/?man,music",
    activity: "Deleted album 'Midnight Tales'",
    timestamp: "2025-04-22 02:00 PM",
    status: "Success",
    device: "Desktop",
    ip: "192.168.1.14",
  },
  {
    id: "ACT1008",
    user: "Lucas Miller",
    role: "Fan",
    avatar: "https://source.unsplash.com/50x50/?boy,fan",
    activity: "Liked the song 'Skyline Dreams'",
    timestamp: "2025-04-21 10:00 AM",
    status: "Success",
    device: "Tablet",
    ip: "192.168.1.45",
  },
  {
    id: "ACT1009",
    user: "Admin",
    role: "Admin",
    avatar: "https://source.unsplash.com/50x50/?man,admin",
    activity: "Replied to support ticket #TKT1021",
    timestamp: "2025-04-20 04:50 PM",
    status: "Success",
    device: "Desktop",
    ip: "192.168.1.5",
  },
  {
    id: "ACT1010",
    user: "Sophia Martinez",
    role: "Artist",
    avatar: "https://source.unsplash.com/50x50/?singer,woman",
    activity: "Received payout for March earnings",
    timestamp: "2025-04-20 12:00 PM",
    status: "Success",
    device: "Desktop",
    ip: "192.168.1.10",
  },
];

const getStatusColor = (status: string) => {
  return status === "Success" ? "success" : "error";
};

export default function ActivityLogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredActivities = activitiesData.filter((activity) => {
    const matchesSearch =
      activity.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "Today" && activity.timestamp.includes("2025-04-25"));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#181A20] p-4 md:p-8">
      <h1 className="text-2xl md:text-2xl font-bold mb-6 text-left">
        Activity Log
      </h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 mb-8">
        <TextField
          label="Search by ID or User"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Date Filter</InputLabel>
          <Select
            value={filter}
            label="Date Filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Activity List */}
      <div className="bg-[#292929] rounded-xl shadow-md divide-y">
      {filteredActivities.map((activity) => (
  <div
    key={activity.id}
    className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 hover:bg-gray-800 transition group"
  >
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <Avatar src={activity.avatar} alt={activity.user} />
      <div className="flex flex-col space-y-1">
        <span className="font-semibold p-1 rounded group-hover:bg-gray-800 group-hover:text-white transition">
          {activity.user}
        </span>
        <span className="text-sm p-1 rounded group-hover:bg-gray-800 group-hover:text-white transition">
          {activity.activity}
        </span>
        <span className="text-xs p-1 rounded group-hover:bg-gray-800 group-hover:text-white transition">
          {activity.role}
        </span>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col items-end mt-4 md:mt-0">
      <Chip
        label={activity.status}
        color={getStatusColor(activity.status)}
        size="small"
      />
      <span className="text-gray-400 text-xs mt-2">{activity.timestamp}</span>
      <span className="text-gray-400 text-xs">{activity.device} | IP: {activity.ip}</span>
    </div>
  </div>
))}

      </div>
    </div>
  );
}
