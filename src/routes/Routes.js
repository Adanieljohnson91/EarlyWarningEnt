import About from "../pages/About"
import Advisory from "../pages/AdvisoryPage";
import ExecTeam from "../pages/ExecTeamPage";
import Games from "../pages/GamesPage";
import News from "../pages/News";
import PressKit from "../pages/PressKit";

const routes = [
    {
        path:'/',
        component: About,
        name: "HOME"
    },
    {
        path:'/advisory',
        component: Advisory,
        name: "MILITARY ADVISORY"
    },
    {
        path:'/executiveteam',
        component: ExecTeam,
        name: "EXECUTIVE TEAM"
    },
    {
        path:'/games',
        component: Games,
        name: "GAMES"
    },
    {
        path:'/news',
        component: News,
        name: "INTELLIGENCE"
    }
    // ,{
    //     path:'/presskit',
    //     component: PressKit,
    //     name:"Press Kit"
    // }
]
export default routes;