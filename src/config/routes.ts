import { Fourth } from './../components/welcome/Fourth';
import { Third } from './../components/welcome/Third';
import { Second } from './../components/welcome/Second';
import { First } from './../components/welcome/First';
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
export const routes = [
    { path: '/', redirect: '/welcome', component: Foo },
    { path: '/bar', component: Bar },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1', component: First },
            { path: '1', component: First },
            { path: '2', component: Second },
            { path: '3', component: Third },
            { path: '4', component: Fourth },
        ]
    },
]