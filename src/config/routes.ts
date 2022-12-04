import { StartPage } from './../views/StartPage';
import { Fourth } from './../components/welcome/Fourth';
import { Third } from './../components/welcome/Third';
import { Second } from './../components/welcome/Second';
import { First } from './../components/welcome/First';
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { Welcome } from "../views/Welcome";
import { FirstActions } from '../components/welcome/FirstActions';
import { SecondActions } from '../components/welcome/SecondActions';
import { ThirdActions } from '../components/welcome/ThirdActions';
import { FourthActions } from '../components/welcome/FourthActions';
import { ItemPage } from "../views/ItemPage"
import { TagCreate } from '../components/tag/TagCreate';
import { TagEdit } from '../components/tag/TagEdit';
import { TagPage } from '../views/TagPage';
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
    { path: '/start', component: StartPage },
    {
        path: '/items', component: ItemPage,
        children: [
            { path: '', component: ItemList },
            { path: 'create', component: ItemCreate },
        ]
    },
    {
        path: '/tags', component: TagPage,
        children: [
            { path: 'create', component: TagCreate },
            { path: ':id/edit', component: TagEdit }
        ]
    }
]