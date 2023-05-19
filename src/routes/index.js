//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Layout
import { HeaderLayout } from '~/components/Layout';

const publicRouter = [
    //Cau hinh cho Router user chua dang nhap co the dung
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderLayout,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRouter = [
    //Cau hinh cho Router user da dang nhap moi co the dung
];

export { publicRouter, privateRouter } 