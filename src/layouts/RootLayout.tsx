import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
    return (
        <div className='bg-background'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout