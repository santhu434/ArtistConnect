import type { PropsWithChildren } from "react";

const NavBar = ({ children }: PropsWithChildren) => {
    return (<div className="bg-[#292929]  flex-col justify-between rounded-2xl m-6 flex-2/12 w-xs py-5 hidden md:flex">
        {children}
    </div>);
}

export default NavBar;