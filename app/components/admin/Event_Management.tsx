import React from "react";
import { Button, Chip } from "@mui/material";

type Event = {
  id: number;
  title: string;
  artist: string;
  date: string;
  time: string;
  location: string;
  price: number;
  ticketsAvailable: number;
  ticketsBooked: number;
  status: "Upcoming" | "Ongoing" | "Completed";
  image: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Summer Beats Festival",
    artist: "DJ Nova",
    date: "2025-06-20",
    time: "18:00",
    location: "Los Angeles, CA",
    price: 49.99,
    ticketsAvailable: 500,
    ticketsBooked: 200,
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1693670984742-c008c239daf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fFN1bW1lciUyMEJlYXRzJTIwRmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Rocking the Night",
    artist: "The Rockstars",
    date: "2025-05-10",
    time: "20:00",
    location: "New York, NY",
    price: 59.99,
    ticketsAvailable: 400,
    ticketsBooked: 350,
    status: "Ongoing",
    image:
      "https://plus.unsplash.com/premium_photo-1683121123884-bc18c5f418fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxSb2NraW5nJTIwdGhlJTIwTmlnaHR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Acoustic Evenings",
    artist: "Lana Bloom",
    date: "2025-04-28",
    time: "19:00",
    location: "Austin, TX",
    price: 29.99,
    ticketsAvailable: 300,
    ticketsBooked: 300,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1596470398897-421504eb771e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fEFjb3VzdGljJTIwRXZlbmluZ3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Hip Hop Explosion",
    artist: "MC Blaze",
    date: "2025-07-15",
    time: "21:00",
    location: "Chicago, IL",
    price: 45.0,
    ticketsAvailable: 600,
    ticketsBooked: 150,
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1738153175931-7a76aaa367b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhpcCUyMEhvcCUyMEV4cGxvc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Indie Vibes",
    artist: "The Wanderers",
    date: "2025-08-05",
    time: "17:00",
    location: "Seattle, WA",
    price: 35.0,
    ticketsAvailable: 200,
    ticketsBooked: 50,
    status: "Upcoming",
    image:
      "https://plus.unsplash.com/premium_photo-1681409178587-381f10eff3af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEluZGllJTIwaG9saSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Upcoming":
      return "info";
    case "Ongoing":
      return "warning";
    case "Completed":
      return "success";
    default:
      return "primary";
  }
};

export default function EventManagement() {
  return (
    <div className="min-h-screen bg-[#181A20] p-4 md:p-8">
      <h1 className="text-2xl md:text-2xl font-bold mb-8 text-left">
        Event Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#292929] rounded-xl shadow-md overflow-hidden flex flex-col transition hover:bg-[#3A3A3A] duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <Chip
                  label={event.status}
                  size="small"
                  color={getStatusColor(event.status)}
                />
              </div>

              <p className="mb-1">By {event.artist}</p>
              <p className="text-sm mb-1">
                {event.date} • {event.time}
              </p>
              <p className="text-sm mb-1">{event.location}</p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-md font-semibold text-green-700">
                    RM{event.price.toFixed(2)}
                  </p>
                  <p className="text-xs">
                    {event.ticketsBooked}/{event.ticketsAvailable} booked
                  </p>
                </div>

                <div className="flex flex-row gap-2">
                  <Button variant="outlined" size="small">
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                  >
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" size="small">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
