import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

type Fan = {
  id: number;
  name: string;
  email: string;
  status: string;
  totalFollowing: number;
  totalPlaylists: number;
  totalSongsLiked: number;
  joined: string;
  avatar: string;
};

export default function FanAccounts() {

  const fans: Fan[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
      totalFollowing: 34,
      totalPlaylists: 12,
      totalSongsLiked: 130,
      joined: "2023-01-20",
      avatar: "https://source.unsplash.com/random/100x100?face,man,1",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      status: "Pending",
      totalFollowing: 23,
      totalPlaylists: 7,
      totalSongsLiked: 75,
      joined: "2023-02-15",
      avatar: "https://source.unsplash.com/random/100x100?face,woman,2",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Blocked",
      totalFollowing: 10,
      totalPlaylists: 3,
      totalSongsLiked: 45,
      joined: "2023-03-05",
      avatar: "https://source.unsplash.com/random/100x100?face,man,3",
    },
    {
      id: 4,
      name: "Eve Davis",
      email: "eve@example.com",
      status: "Active",
      totalFollowing: 50,
      totalPlaylists: 15,
      totalSongsLiked: 200,
      joined: "2022-06-10",
      avatar: "https://source.unsplash.com/random/100x100?face,woman,4",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "Active",
      totalFollowing: 40,
      totalPlaylists: 10,
      totalSongsLiked: 120,
      joined: "2022-08-12",
      avatar: "https://source.unsplash.com/random/100x100?face,man,5",
    },
    // Add more fan data as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "success";
      case "Pending":
        return "warning";
      case "Blocked":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <div className="bg-[#181A20] p-4 md:p-8">
      <h1 className="text-2xl md:text-2xl font-bold text-white mb-6 text-left">
        FANS ACCOUNTS MANAGEMENT
      </h1>

      <div className="overflow-x-auto">
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table>
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell>Fan</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total Following</TableCell>
                <TableCell>Total Playlists</TableCell>
                <TableCell>Total Songs Liked</TableCell>
                <TableCell>Joined</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {fans.map((fan) => (
                <TableRow key={fan.id} hover>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar src={fan.avatar} alt={fan.name} />
                      <span className="font-medium">{fan.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{fan.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={fan.status}
                      color={getStatusColor(fan.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell className="text-center">{fan.totalFollowing}</TableCell>
                  <TableCell className="text-center">{fan.totalPlaylists}</TableCell>
                  <TableCell className="text-center">{fan.totalSongsLiked}</TableCell>
                  <TableCell className="whitespace-nowrap">{fan.joined}</TableCell>

                  <TableCell>
                    <div className="flex flex-col md:flex-row gap-2">
                      <Button size="small" variant="outlined" color="primary">
                        View
                      </Button>
                      <Button size="small" variant="outlined" color="secondary">
                        Edit
                      </Button>
                      <Button size="small" variant="outlined" color="error">
                        Block
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
