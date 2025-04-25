import { type JSX } from "react";
import sp1 from '../../assets/images/songPic (1).png';
import sp2 from '../../assets/images/songPic (2).png';
import sp3 from '../../assets/images/songPic (3).png';
import sp4 from '../../assets/images/songPic (4).png';
import ContentCard, { type ContentItem } from "../UI/ContentCard";





export const Content = (): JSX.Element => {
  // Data for metric cards
  const audioItems: ContentItem[] = [
    {
      image: sp1,
      title: "Lost in the Vibe",
      type: "Audio",
      stats: "23.4K Plays | 1.2K Likes | 328 Comments",
      completion: "82% Completion",
    },
    {
      image: sp2,
      title: "Lost in the Vibe",
      type: "Audio",
      stats: "23.4K Plays | 1.2K Likes | 328 Comments",
      completion: "82% Completion",
    },
    {
      image: sp3,
      title: "Lost in the Vibe",
      type: "Audio",
      stats: "23.4K Plays | 1.2K Likes | 328 Comments",
      completion: "82% Completion",
    },
    {
      image: sp4,
      title: "Lost in the Vibe",
      type: "Audio",
      stats: "23.4K Plays | 1.2K Likes | 328 Comments",
      completion: "82% Completion",
    },
  ];


  return (
    <section className="flex flex-col gap-2 mt-2 w-full">
      <h2 className="self-stretch mt-[-1.00px] font-['Inter',Helvetica] font-bold text-[#ff3939] text-xl tracking-[0] leading-7">
        Content Performance
      </h2>

      <h3 className="font-semibold font-['Inter',Helvetica] text-base text-white">Top Performing Audio</h3>
      <p className="text-white text-[11px] font-normal">
        (Last 28 Days)
      </p>

      <div className="grid grid-cols-2 items-center gap-[15px] w-full hide-scrollbar overflow-x-scroll">
        {audioItems.map((card, index) => (
          <ContentCard card={card} index={index} />
        ))}
      </div>

      <h3 className="font-semibold font-['Inter',Helvetica] text-base text-white">Top Performing Video</h3>
      <p className="text-white text-[11px] font-normal">
        (Last 28 Days)
      </p>

      <div className="grid grid-cols-2 items-center gap-[15px] w-full hide-scrollbar overflow-x-scroll">
        {audioItems.map((card, index) => (
          <ContentCard card={card} index={index} />
        ))}
      </div>
    </section>
  );
};
