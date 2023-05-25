import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn, SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'

const menu = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        src: <AiFillPieChart />
    },
    {
        title: 'Course',
        path: '/course',
        src: <SiFuturelearn />
    },
    {
        title: 'Profile',
        path: '/profile',
        src: <CgProfile />
    },
    {
        title: 'Signin',
        path: '/login',
        src: <SiOpenaccess />, gap: 'true'
    },
]

export default menu