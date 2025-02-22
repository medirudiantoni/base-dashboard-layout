import { Outlet } from 'react-router'
import Sidebar, { MenuItem } from './components/sidebar'
import { Home, Package, ShoppingBag, Store } from 'lucide-react';

const menuItem: MenuItem[] = [
    {
        title: "Dashboard",
        path: "",
        icon: Home
    },
    {
        title: "Produk",
        path: "",
        icon: Package
    },
    {
        title: "Pesanan",
        path: "",
        icon: ShoppingBag
    },
    {
        title: "Toko",
        path: "",
        icon: Store
    },
];

export default function DashboardLayout() {
    return (
        <div className='w-full h-fit min-h-screen'>
            <div className="w-full flex min-h-full">
                <Sidebar menuItem={menuItem} />
                <div className="flex-1 min-h-[90vh] h-fit">
                    <header className='w-full h-[10vh] border-b border-slate-800 sticky top-0 bg-white'></header>
                    <div className="w-full min-h-[90vh] p-5">
                        <div className="w-full h-[200vh] border border-slate-800">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}