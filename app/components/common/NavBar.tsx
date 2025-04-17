import type { PropsWithChildren } from "react";

const NavBar = ({ children }: PropsWithChildren) => {
    return (<div className="bg-[#292929] flex flex-col justify-between rounded-2xl m-6 flex-2/12 w-xs py-5">
        {children}
    </div>);
}

export default NavBar;