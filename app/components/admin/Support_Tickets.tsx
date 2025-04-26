import React, { useState } from "react";
import { Button, Chip, Avatar, Modal, Box, TextField } from "@mui/material";

type Ticket = {
  id: string;
  user: string;
  email: string;
  avatar: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  date: string;
};

const ticketsData: Ticket[] = [
  {
    id: "#TKT1021",
    user: "Olivia Smith",
    email: "olivia@example.com",
    avatar: "https://source.unsplash.com/50x50/?woman,face",
    title: "Unable to Upgrade Subscription",
    description: "Facing error while trying to upgrade to premium plan...",
    priority: "High",
    status: "Open",
    date: "2025-04-24",
  },
  {
    id: "#TKT1022",
    user: "Liam Johnson",
    email: "liam@example.com",
    avatar: "https://source.unsplash.com/50x50/?man,face",
    title: "Payment Not Reflected",
    description: "Paid for subscription but account still shows free tier...",
    priority: "Medium",
    status: "In Progress",
    date: "2025-04-23",
  },
  {
    id: "#TKT1023",
    user: "Emma Brown",
    email: "emma@example.com",
    avatar: "https://source.unsplash.com/50x50/?girl,face",
    title: "Charged Twice for Subscription",
    description: "I was billed twice this month. Need a refund...",
    priority: "High",
    status: "Resolved",
    date: "2025-04-22",
  },
  {
    id: "#TKT1024",
    user: "Noah Davis",
    email: "noah@example.com",
    avatar: "https://source.unsplash.com/50x50/?boy,face",
    title: "Can't Access Premium Songs",
    description: "After subscribing, premium content still locked...",
    priority: "Low",
    status: "Closed",
    date: "2025-04-20",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "error";
    case "Medium":
      return "warning";
    case "Low":
      return "info";
    default:
      return "default";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Open":
      return "info";
    case "In Progress":
      return "warning";
    case "Resolved":
      return "success";
    case "Closed":
      return "secondary";
    default:
      return "default";
  }
};

export default function SupportTickets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [replyMessage, setReplyMessage] = useState("");

  const handleOpenModal = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setReplyMessage("");
    setSelectedTicket(null);
  };

  const handleSendReply = () => {
    console.log(`Reply sent for ${selectedTicket?.id}: ${replyMessage}`);
    handleCloseModal();
  };

  const filteredTickets = ticketsData.filter((ticket) =>
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#181A20] p-4 md:p-8">
      <h1 className="text-2xl md:text-2xl font-bold mb-6 text-left">
        Support Tickets
      </h1>

      {/* Search Bar */}
      <div className="mb-8 bg-white rounded-xl shadow-md p-4">
        <TextField
          label="Search by Ticket ID"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tickets */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-[#292929] rounded-xl shadow-md overflow-hidden flex flex-col p-4 hover:bg-[#3A3A3A] hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <Avatar src={ticket.avatar} alt={ticket.user} />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{ticket.user}</h2>
                  <p className="text-white text-sm">{ticket.email}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-white">{ticket.id}</p>
                <Chip
                  label={ticket.priority}
                  size="small"
                  color={getPriorityColor(ticket.priority)}
                />
              </div>

              <h3 className="text-md font-bold mb-1">{ticket.title}</h3>
              <p className="text-white text-sm line-clamp-2 mb-4">
                {ticket.description}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <Chip
                  label={ticket.status}
                  size="small"
                  color={getStatusColor(ticket.status)}
                />
                <div className="flex gap-2">
                  <Button variant="outlined" size="small">
                    View
                  </Button>
                  {ticket.status === "Open" || ticket.status === "In Progress" ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      sx={{
                        backgroundColor: "#FF5E69",
                        "&:hover": {
                          backgroundColor: "#ff3b4f",
                        },
                      }}
                      onClick={() => handleOpenModal(ticket)}
                    >
                      Reply
                    </Button>
                  ) : null}
                </div>
              </div>

              <p className="text-gray-400 text-xs mt-2">Raised on {ticket.date}</p>
            </div>
          ))
        ) : (
          <p>No tickets found.</p>
        )}
      </div>

      {/* Reply Modal */}
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[90%] md:w-[600px]"
        >
          <h2 className="text-xl font-bold mb-4">Reply to {selectedTicket?.id}</h2>

          <TextField
            label="Your Reply"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            className="mb-6"
          />

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="text" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF5E69",
                "&:hover": {
                  backgroundColor: "#ff3b4f",
                },
              }}
              onClick={handleSendReply}
            >
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
