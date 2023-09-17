//import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import { Home, Detail, Search } from '~/components/pages';
import { LayoutHome, Default } from '~/layouts';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: LayoutHome,
    },

    {
        path: '/comic/:id',
        component: Detail,
        layout: Default,
    },

    {
        path: '/search/character/:id',
        component: Search,
        layout: Default,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
