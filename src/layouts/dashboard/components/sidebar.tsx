import { LucideProps, PanelRightClose, PanelRightOpen, UserRound } from 'lucide-react'
import { useState } from 'react';

export interface MenuItem {
    title: String;
    path: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

interface Props {
    menuItem: MenuItem[]
}

export default function Sidebar({ menuItem }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggleOpen() {
        setIsOpen(!isOpen)
    }
    return (
        <aside className={`xl:w-64 fixed z-50 md:sticky h-screen top-0 transition-all duration-200 ease-in-out ${isOpen ? "w-full md:w-64" : "w-0 md:w-20"}`}>
            <div className={`fixed top-0 left-0 w-full h-full bg-slate-950/30 duration-200 ease-in-out ${isOpen ? "block md:hidden opacity-100" : "hidden opacity-0"}`}></div>
            <div className={`w-5/6 sm:w-1/2 md:w-full bg-white border-r border-slate-800 relative z-10`}>
                <div className="bg-white flex xl:hidden items-center justify-center w-20 h-[10vh] border border-t-0 border-slate-800 absolute top-0 left-full">
                    <button aria-label="Toggle Sidebar" onClick={handleToggleOpen} className="w-12 cursor-pointer aspect-square rounded-full hover:bg-slate-200 flex items-center justify-center">
                        {isOpen ? <PanelRightOpen /> : <PanelRightClose />}
                    </button>
                </div>
                <header className='w-full h-[10vh] border-b border-slate-800 sticky top-0 bg-white'></header>
                <div className="w-full h-[90vh] flex flex-col justify-between overflow-hidden">
                    <div className="w-full h-fit py-5 flex flex-col">
                        {menuItem && menuItem.map((item, id) => (
                            <button key={id} className={`w-full flex items-center xl:gap-3 justify-start px-7 py-2 hover:bg-slate-200 duration-200 ease-in-out ${isOpen ? "md:gap-3" : "md:gap-12"}`}>
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <item.icon />
                                </div>
                                <p className={`overflow-hidden text-ellipsis whitespace-nowrap ${isOpen ? "block" : "hidden md:block"}`}>
                                    {item.title}
                                </p>
                            </button>
                        ))}
                    </div>
                    <div className="w-full h-fit px-2 xl:px-5 py-5 duration-200 ease-in-out">
                        <div className="w-full h-fit border-slate-800 rounded-lg duration-200 ease-in-out hover:bg-slate-100">
                            <div className={`w-fit py-3 xl:px-0 flex items-center xl:gap-2 duration-200 ease-in-out ${isOpen ? "gap-2 px-4" : "gap-12 px-1.5"}`}>
                                <div className="w-12 h-12 overflow-hidden flex items-center justify-center rounded-full bg-slate-200">
                                    <UserRound />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold leading-5">Unknown user</h4>
                                    <p className="text-sm text-slate-400">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}