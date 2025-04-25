import { type JSX } from "react";
import Card from "../UI/card";





export const Fans = (): JSX.Element => {
  // Data for metric cards
  const fanMetrics = [
    {
      title: "Total Fans",
      value: "50,008",
      percentage: "28.4%",

    },
    {
      title: "Active Fans",
      value: "38,000",
      percentage: "3.1%",

    },
    {
      title: "New Signups (Week)",
      value: "2,200",
      percentage: "3.1%",

    },
    {
      title: "Free Users",
      value: "$2,100",
      percentage: "11.3%",

    },
    {
      title: "Premium Users",
      value: "320",
      percentage: "11.3%",

    },
    {
      title: "Gold Users",
      value: "320",
      percentage: "11.3%",

    },
  ];


  return (
    <section className="flex flex-col gap-2 mt-2 w-full">
      <h2 className="self-stretch mt-[-1.00px] font-['Inter',Helvetica] font-bold text-[#ff3939] text-xl tracking-[0] leading-7">
        Fan
      </h2>

      <div className="flex flex-row items-center gap-[15px] w-full hide-scrollbar overflow-x-scroll">
        {fanMetrics.map((card, index) => (
          <Card card={card} index={index} />
        ))}
      </div>
    </section>
  );
};
