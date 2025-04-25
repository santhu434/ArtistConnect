import { type JSX } from "react";
import Card, { type cardType } from "../UI/card";





export const Artists = (): JSX.Element => {
  // Data for metric cards
  const metricCards: cardType[] = [
    {
      title: "Onboarded Artists",
      value: "4,800",
      percentage: "28.4%",
    },
    {
      title: "Active Artist",
      value: "3,500",
      percentage: "3.1%",
    },
    {
      title: "Artist Earnings",
      value: "RM10K",
      percentage: "11.3%",
    },
    {
      title: "New Artists",
      value: "320",
      percentage: "11.3%",
    },
    {
      title: "Total Uploads (Video)",
      value: "4,800",
      percentage: "28.4%",
    },
    {
      title: "Total Uploads (Audio)",
      value: "3,500",
      percentage: "3.1%",
    },
  ];

  return (
    <section className="flex flex-col gap-2 mt-2 w-full">
      <h2 className="self-stretch mt-[-1.00px] font-['Inter',Helvetica] font-bold text-[#ff3939] text-xl tracking-[0] leading-7">
        Artist
      </h2>

      <div className="flex flex-row items-center gap-[15px] w-full hide-scrollbar overflow-x-scroll">
        {metricCards.map((card, index) => (
          <Card card={card} index={index} />
        ))}
      </div>
    </section>
  );
};
