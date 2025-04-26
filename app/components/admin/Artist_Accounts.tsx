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
  Tooltip,
  Modal,
  Box,
} from "@mui/material";

type Artist = {
  id: number;
  name: string;
  email: string;
  status: string;
  totalSongs: number;
  totalAlbums: number;
  earnings: number;
  joined: string;
  avatar: string;
};

export default function ArtistAccounts() {
  const artists = [
    {
      id: 1,
      name: "Ariana Melody",
      email: "ariana@example.com",
      status: "Active",
      totalSongs: 120,
      totalAlbums: 5,
      earnings: 35000,
      joined: "2023-01-15",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Blake Beats",
      email: "blake@example.com",
      status: "Pending",
      totalSongs: 45,
      totalAlbums: 2,
      earnings: 8500,
      joined: "2023-03-10",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Sophie Sound",
      email: "sophie@example.com",
      status: "Blocked",
      totalSongs: 87,
      totalAlbums: 3,
      earnings: 15200,
      joined: "2022-11-05",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Mike Melody",
      email: "mike@example.com",
      status: "Active",
      totalSongs: 210,
      totalAlbums: 8,
      earnings: 60000,
      joined: "2021-06-20",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Lucy Lyrics",
      email: "lucy@example.com",
      status: "Active",
      totalSongs: 134,
      totalAlbums: 4,
      earnings: 27800,
      joined: "2022-02-18",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      name: "Nate Notes",
      email: "nate@example.com",
      status: "Pending",
      totalSongs: 33,
      totalAlbums: 1,
      earnings: 4500,
      joined: "2023-07-01",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      name: "Ella Echo",
      email: "ella@example.com",
      status: "Active",
      totalSongs: 96,
      totalAlbums: 3,
      earnings: 21000,
      joined: "2022-09-14",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      name: "Oscar Octaves",
      email: "oscar@example.com",
      status: "Blocked",
      totalSongs: 54,
      totalAlbums: 2,
      earnings: 11200,
      joined: "2021-12-30",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      name: "Bella Beats",
      email: "bella@example.com",
      status: "Active",
      totalSongs: 144,
      totalAlbums: 6,
      earnings: 42000,
      joined: "2023-05-05",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      name: "Tommy Tune",
      email: "tommy@example.com",
      status: "Active",
      totalSongs: 78,
      totalAlbums: 3,
      earnings: 18500,
      joined: "2022-04-22",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
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
        ARTIST ACCOUNTS MANAGEMENT
      </h1>

      <div className="overflow-x-auto">
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table>
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell>Artist</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total Songs</TableCell>
                <TableCell>Total Albums</TableCell>
                <TableCell>Earnings ($)</TableCell>
                <TableCell>Joined</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {artists.map((artist) => (
                <TableRow key={artist.id} hover>
                  <TableCell>
                    <div className="flex items-center gap-3 z-0">
                      <Avatar src={artist.avatar} alt={artist.name} className="z-0"/>
                      <span className="font-medium">{artist.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{artist.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={artist.status}
                      color={getStatusColor(artist.status)}
                      size="small"
                    />
                  </TableCell>

                  {/* For mobile view, show ellipsis and modal on click */}
                  <TableCell className="hidden md:table-cell">{artist.totalSongs}</TableCell>
                  <TableCell className="hidden md:table-cell">{artist.totalAlbums}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${artist.earnings.toLocaleString()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{artist.joined}</TableCell>

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
