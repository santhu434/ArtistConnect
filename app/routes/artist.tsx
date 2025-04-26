import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TuneIcon from "@mui/icons-material/Tune";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import geographyImg from "../assets/images/geography.png";
import e1 from "../assets/images/image-1.png";
import e2 from "../assets/images/image-2.png";
import sp1 from "../assets/images/songPic (1).png";
import sp2 from "../assets/images/songPic (2).png";
import sp3 from "../assets/images/songPic (3).png";
import sp4 from "../assets/images/songPic (4).png";
import audio from "../assets/music/one.mp3";

const MusicCard = ({
  title,
  img,
  time,
  audio,
  onPlay,
}: {
  title: string;
  img: string;
  time: string;
  audio: string;
  onPlay: (audioSrc: string, title: string, img: string) => void;
}) => (
  <Button
    onClick={() => onPlay(audio, title, img)}
    variant="outlined"
    sx={{
      border: "1px solid #C7643D",
      padding: "2px 8px",
      fontSize: "10px",
      fontWeight: 600,
      textTransform: "none",
      color: "#C7643D",
      mt: 1,
      "&:hover": { borderColor: "#C7643D" },
    }}
  >
    View
  </Button>
);

const Artist = () => {
  const [currentAudio, setCurrentAudio] = useState<{
    src: string;
    title: string;
    img: string;
  } | null>(null);
  const handlePlay = (audioSrc: string, title: string, img: string) => {
    setCurrentAudio({ src: audioSrc, title, img });
  };
  const navigate = useNavigate();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videos = [
    { img: sp1, videoUrl: "https://www.youtube.com/embed/TahZPOqCTXc?si=xSohDpVtD0_6vtS1" }, // Sample YouTube link (replace with your own)
    { img: e1, videoUrl: "https://www.youtube.com/embed/LjhCEhWiKXk?si=POB2xp6q_qCtS6Dd" },
    { img: e2, videoUrl: "https://www.youtube.com/embed/UqyT8IEBkvY?si=54vGTlT2robWbPBR" },
    { img: sp4, videoUrl: "https://www.youtube.com/embed/SR6iYWJxHqs?si=Q0kDb3onIsx3TdGD" },
  ];

  const handlePlayVideo = (idx: number | null) => {
    setPlayingIndex(idx);
  };

  return (
    <>
      <div className="p-4">
        {/* Studio Analytics */}
        <h3 className="text-[#FF3939] font-bold text-3xl">Studio Analytics</h3>
        <span className="text-white font-normal text-sm block mt-1">
          Track your performance. Understand your fans. Grow your impact.
        </span>

        <div className="my-5 flex flex-wrap gap-4">
          {/* Analytics Cards */}
          {[
            {
              Icon: VisibilityIcon,
              title: "Total Fans",
              value: "50.8K",
              growth: "28.4%",
            },
            {
              Icon: AddCircleIcon,
              title: "Audio Listeners",
              value: "20K",
              growth: "3.1%",
            },
            {
              Icon: StarIcon,
              title: "Video Watch Time",
              value: "100h",
              growth: "11.3%",
            },
            {
              Icon: StarIcon,
              title: "Total Revenue",
              value: "RM 100.3K",
              growth: "11.3%",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#003754] border-2 border-[#343B4F] rounded-2xl p-4 w-full sm:w-64"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <item.Icon fontSize="small" />
                  <span className="text-[#AEB9E1] text-xs ml-2">
                    {item.title}
                  </span>
                </div>
                <span className="text-white">•••</span>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-white text-2xl font-semibold">
                  {item.value}
                </span>
                <div className="ml-2 bg-[#05C16838] border-2 border-[#05C16838] flex items-center rounded-sm p-1">
                  <span className="text-[#14CA74] text-[10px]">
                    {item.growth}
                  </span>
                  <ArrowOutwardIcon className="ml-1 w-3 h-3" fontSize="small" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Performance */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-[#FF3939] font-bold text-xl">
                Content Performance
              </h3>
              <TuneIcon sx={{ color: "#FF3939" }} />
            </div>

            {/* Top Performing Audio */}
            <section className="mt-5">
              <h3 className="text-white font-semibold text-base">
                Top Performing Audio
              </h3>
              <div className="text-white text-[11px] font-normal my-2">
                (Last 28 Days)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[sp1, sp4, sp2, sp3].map((img, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-2">
                    <img
                      className="w-24 h-24 object-cover rounded-md"
                      src={img}
                      alt="Artist"
                    />
                    <div className="flex flex-col">
                      <div className="text-white font-medium text-base whitespace-nowrap">
                        Lost in the Vibe
                      </div>
                      <div className="text-[#D8D8D8] text-[10px]">Audio</div>
                      <div className="text-[#D8D8D8] text-[10px]">
                        23.4K Plays | 1.2K Likes | 328 Comments
                      </div>
                      <div className="text-[#D8D8D8] text-[10px]">
                        82% Completion
                      </div>
                      <MusicCard
                        title={"Lost in the Vibe"}
                        img={img}
                        time={"4.30"}
                        audio={audio}
                        onPlay={handlePlay}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Performing Video */}
            <section className="mt-10">
              <h3 className="text-white font-semibold text-base">
                Top Performing Video
              </h3>
              <div className="text-white text-[11px] font-normal my-2">
                (Last 28 Days)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-2">
                    <img
                      className="w-24 h-24 object-cover rounded-md"
                      src={item.img} // Correctly reference the imported image here
                      alt="Artist"
                    />
                    <div className="flex flex-col">
                      <div className="text-white font-medium text-base whitespace-nowrap">
                        Lost in the Vibe
                      </div>
                      <div className="text-[#D8D8D8] text-[10px]">Audio</div>
                      <div className="text-[#D8D8D8] text-[10px]">
                        23.4K Plays | 1.2K Likes | 328 Comments
                      </div>
                      <div className="text-[#D8D8D8] text-[10px]">
                        82% Completion
                      </div>

                      {playingIndex === idx ? (
                        <iframe
                          width="300"
                          height="200"
                          src={item.videoUrl}
                          title="YouTube Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="mt-2 rounded-md"
                        ></iframe>
                      ) : (
                        <Button
                          variant="outlined"
                          sx={{
                            border: "1px solid #C7643D",
                            padding: "2px 8px",
                            fontSize: "10px",
                            fontWeight: 600,
                            textTransform: "none",
                            color: "#C7643D",
                            mt: 1,
                            "&:hover": { borderColor: "#C7643D" },
                          }}
                          onClick={() => handlePlayVideo(idx)}
                        >
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Monetization Section */}
          <div className="flex flex-col flex-shrink-0 w-full lg:w-1/3 gap-3">
            <h3 className="text-[#FF3939] font-bold text-xl">Monetization</h3>
            <h3 className="text-white font-semibold text-base mt-3">
              Total Earnings Breakdown
            </h3>
            <div className="text-white text-[11px] font-normal my-2">
              (Last 28 Days)
            </div>
            <div className="flex flex-col gap-2">
              {[
                { title: "Subscriptions", amount: "RM 2,500" },
                { title: "Event Tickets", amount: "RM 1,200" },
                // Add more if needed
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-white text-xs font-normal">
                    {item.title}
                  </span>
                  <span className="text-white text-xs font-semibold">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
            <img
              src={geographyImg}
              className="w-[300px] h-[230px]"
              alt="GeoGraphy"
            />
          </div>
        </div>

        <nav className="fixed md:hidden bottom-0 right-0 bg-[#292929] grid grid-cols-5 left-0">
          <div className="flex flex-col items-center px-5 py-3">
            <HomeFilledIcon sx={{ color: "#AAAAAA" }} />
            <div className="text-xs font-medium text-[#AAAAAA]">HOME</div>
          </div>
          <div
            onClick={() => navigate("/fans/explore/")}
            className="flex flex-col items-center px-5 py-3"
          >
            <SearchIcon sx={{ color: "#AAAAAA" }} />
            <div className="text-xs font-medium text-[#AAAAAA]">EXPLORE</div>
          </div>
          <div className="flex flex-col items-center px-5 py-3">
            <MusicNoteIcon sx={{ color: "#FF3939" }} />
            <div className="text-xs font-medium text-[#FF3939]">ARTISTS</div>
          </div>
          <div className="flex flex-col items-center px-5 py-3">
            <StorefrontIcon sx={{ color: "#AAAAAA" }} />
            <div className="text-xs font-medium text-[#AAAAAA]">SHOP</div>
          </div>
          <div className="flex flex-col items-center px-5 py-3">
            <ChatBubbleOutlineIcon sx={{ color: "#AAAAAA" }} />
            <div className="text-xs font-medium text-[#AAAAAA]">MESSAGES</div>
          </div>
        </nav>
        {currentAudio && (
          <div className="fixed bottom-16 left-0 right-0 mx-auto bg-[#292929] text-white flex items-center space-x-3 px-4 py-2 rounded-2xl shadow-lg z-50 max-w-md md:max-w-fit">
            <img
              src={currentAudio.img}
              alt={currentAudio.title}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                {currentAudio.title}
              </span>
            </div>
            <audio
              src={currentAudio.src}
              controls
              autoPlay
              className="w-full md:w-60"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Artist;
