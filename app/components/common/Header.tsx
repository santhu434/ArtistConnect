import type { PropsWithChildren } from "react";
import logowhite from '../../assets/icons/logowhite.svg';


function Header({ children }: PropsWithChildren) {


  return (
    <div className="h-[12vh] bg-gradient-to-r from-[#650077] to-[#AE008E] flex items-center header px-4">
      <div className="flex items-center gap-3">
        <img src={logowhite} className="w-8 h-8" alt="Logo" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">ArtistConnect</h1>
      </div>
      {children}
    </div>
  )
}

export default Header