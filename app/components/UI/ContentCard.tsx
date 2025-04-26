
export type ContentItem = {
  image: string;
  title: string;
  type: string;
  stats: string;
  completion: string;
};

const ContentCard = ({ card, index }: { card: ContentItem, index: number }) => {
  return (<div key={index} className="flex-1 flex items-center p-2 h-full">
    <img className="w-24 h-24" src={card.image} />

    <div className="inline-flex ml-3 flex-col items-start gap-0.5 my-3">
      <span className="font-['Inter',Helvetica] font-semibold text-white text-base whitespace-nowrap">
        {card.title}
      </span>

      <span className="text-[#D8D8D8] text-[10px] whitespace-nowrap">
        Audio
      </span>
      <span className="text-[#D8D8D8] text-[10px] whitespace-nowrap">
        {card.stats}
      </span>
      <span className="text-[#D8D8D8] text-[10px] whitespace-nowrap">
        {card.completion}
      </span>
      <button className="text-[#10B981] font-semibold border-[#10B981] border rounded-md px-3 py-1 text-[10px] whitespace-nowrap">
        View
      </button>
    </div>
  </div>);
}

export default ContentCard;