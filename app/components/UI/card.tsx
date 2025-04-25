import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export type cardType = {
  title: string;
  value: string;
  percentage: string;
}

const Card = ({ card, index }: { card: cardType, index: number }) => {
  return (<div key={index} className="flex-1 rounded-[5px] border-[0.6px] border-solid border-[#343B4F] p-2 bg-[#3c3c3c] h-full">

    <div className="flex justify-between items-center">
      <div className="inline-flex items-center gap-1 bg-[#3c3c3c] rounded-[5px]">
        <span className="font-['Inter',Helvetica] font-normal text-[#AEB9E1] text-xs tracking-[0] leading-[14px] whitespace-nowrap">
          {card.title}
        </span>
      </div>
      <button className="text-[#AEB9E1] w-min">
        <span className="text-white">•••</span>
      </button>
    </div>

    <div className="inline-flex items-center gap-1.5 bg-[#3c3c3c] my-3">
      <span className="font-['Inter',Helvetica] font-semibold text-neutral-colors100 text-2xl tracking-[0] leading-8 whitespace-nowrap">
        {card.value}
      </span>
      <div className="ml-2 bg-[#05C16838] border-2 border-[#05C16838] flex items-center rounded-sm p-[2px]">
        <span className="text-[#14CA74] text-[10px]">
          {card.percentage}
        </span>
        <ArrowOutwardIcon className="ml-1 w-3 h-3" sx={{ color: "#14CA74", fontSize: "12px" }} fontSize="small" />
      </div>
    </div>
  </div>);
}

export default Card;