import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from '@mui/icons-material/Star';
import TuneIcon from '@mui/icons-material/Tune';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import geographyImg from "../assets/images/geography.png";
import sp1 from "../assets/images/songPic (1).png";
import sp2 from "../assets/images/songPic (2).png";
import sp3 from "../assets/images/songPic (3).png";
import sp4 from "../assets/images/songPic (4).png";




const Artist = () => {
    return (<>

        {/* header */}


        {/* left navigation */}


        {/* Right content */}

        {/* Live Now */}
        <div>
            <h3 className="text-[#FF3939] font-bold text-3xl">Studio Analytics</h3>
            <span className="text-white font-normal text-sm">Track your performance. Understand your fans. Grow your impact.</span>

            <div className="my-3  flex ">

                <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                    <div className='flex justify-between items-center'>

                        <span className=''>
                            <VisibilityIcon fontSize='small' />
                            <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Total Fans</span>
                        </span>
                        <span>...</span>
                    </div>
                    <div className='flex my-3 items-center'>
                        <span className='text-2xl font-semibold text-white'>50.8K</span>
                        <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>28.4% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                    </div>

                </div>
                <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                    <div className='flex justify-between items-center'>

                        <span className=''>
                            <AddCircleIcon fontSize='small' />
                            <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Audio Listeners</span>
                        </span>
                        <span>...</span>
                    </div>
                    <div className='flex my-3 items-center'>
                        <span className='text-2xl font-semibold text-white'>20K</span>
                        <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>3.1% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                    </div>

                </div>
                <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                    <div className='flex justify-between items-center'>

                        <span className=''>
                            <StarIcon fontSize='small' />
                            <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Video Watch Time</span>
                        </span>
                        <span>...</span>
                    </div>
                    <div className='flex my-3 items-center'>
                        <span className='text-2xl font-semibold text-white'>100h</span>
                        <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>11.3% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                    </div>

                </div>
                <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                    <div className='flex justify-between items-center'>

                        <span className=''>
                            <StarIcon fontSize='small' />
                            <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Total Revenue</span>
                        </span>
                        <span>...</span>
                    </div>
                    <div className='flex my-3 items-center'>
                        <span className='text-2xl font-semibold text-white'>RM 100.3K</span>
                        <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>11.3% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                    </div>

                </div>

            </div>
        </div>
        <div className='flex mr-14'>
            <div>
                <div className='mr-8 flex-8/12'>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-[#FF3939] font-bold text-xl">Content Performance</h3>
                        <span className='text-[#858585] text-base font-medium'>
                            <TuneIcon sx={{ color: "#FF3939" }} />
                        </span>
                    </div>
                    <h3 className='text-white font-semibold text-base mt-3'>Top Performing Audio</h3>
                    <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                    <div className='grid grid-cols-2 gap-3 my-4'>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp1} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp4} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp2} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp3} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mr-8 flex-8/12'>

                    <h3 className='text-white font-semibold text-base mt-3'>Top Performing Video</h3>
                    <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                    <div className='grid grid-cols-2 gap-3 my-4'>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp1} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp4} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp2} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>
                        <div className=' px-2 flex flex-row items-start min-w-'>
                            <img className='max-w-24 max-h-24' src={sp3} alt="Artist 1" />
                            <div className='ml-3'>
                                <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                <Button variant='outlined' sx={{
                                    border: "1px solid #C7643D",
                                    padding: "1px",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    '&:hover': {
                                        borderColor: '#C7643D',
                                    }, color: "#C7643D"
                                }}>View</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-4/12 flex-col'>
                <div>


                    <div className='flex  justify-between items-center'>
                        <h3 className="text-[#FF3939] font-bold text-xl">Monetization</h3>

                    </div>
                    <h3 className='text-white font-semibold text-base mt-3'>Total Earnings Breakdown</h3>
                    <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                    <div className='flex justify-between'>
                        <span className='text-xs font-normal text-white my-2'>Subscriptions</span>
                        <span className='text-xs font-semibold text-white'>RM 2,500</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-xs font-normal text-white my-2'>Event Tickets</span>
                        <span className='text-xs font-semibold text-white'>RM 1,200</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-xs font-normal text-white my-2'>Merch</span>
                        <span className='text-xs font-semibold text-white'>RM 560</span>
                    </div>

                </div>
                <div>


                    <div className='flex  justify-between items-center'>
                        <h3 className="text-[#FF3939] font-bold text-xl">Audience</h3>

                    </div>
                    <h3 className='text-white font-semibold text-base mt-3'>Top Geographies</h3>
                    <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                    <img src={geographyImg} className='w-[300px] h-[230px]' alt='GeoGraphy' />

                </div>
            </div>
        </div>



    </>);
}

export default Artist;