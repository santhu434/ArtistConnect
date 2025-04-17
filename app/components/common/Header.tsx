import React from 'react'
import logowhite from '../../assets/icons/logowhite.svg';
function Header() {
  return (
    <div className="h-[88px] bg-gradient-to-r from-[#650077] to-[#AE008E] flex items-center justify-center px-4">
        <div className="flex items-center gap-3">
          <img src={logowhite} className="w-8 h-8" alt="Logo" />
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">ArtistConnect</h1>
        </div>
      </div>
  )
}

export default Header