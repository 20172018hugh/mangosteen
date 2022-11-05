import { Fourth } from './../components/welcome/Fourth';
import { Third } from './../components/welcome/Third';
import { Second } from './../components/welcome/Second';
import { First } from './../components/welcome/First';
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { FirstActions } from '../components/welcome/FirstActions';
import { SecondActions } from '../components/welcome/SecondActions';
import { ThirdActions } from '../components/welcome/ThirdActions';
import { FourthActions } from '../components/welcome/FourthActions';
export const routes = [
    { path: '/', redirect: '/welcome', component: Foo },
    { path: '/bar', component: Bar },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1', component: First },
            { path: '1', name: "Welcome1", components: { main: First, footer: FirstActions }, },
            { path: '2', name: "Welcome2", components: { main: Second, footer: SecondActions }, },
            { path: '3', name: "Welcome3", components: { main: Third, footer: ThirdActions }, },
            { path: '4', name: "Welcome4", components: { main: Fourth, footer: FourthActions }, },
        ]
    },
]