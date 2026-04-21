import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-zinc-100 text-zinc-900">
            <NavBar />
            <main className="pb-[6vh] pt-20 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
