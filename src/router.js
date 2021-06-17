import {Router} from "@vaadin/router";

const outlet= document.getElementById("outlet")
export const router= new Router(outlet);
router.setRoutes([
{ path:"/", component: "poke-comp"},
{ path: "/post", component: "poke-comp"},
{ path: "/desc", component: "descarga-comp"},
{ path: "/info/:id", component: "evolution-comp" },
{ path: "/pokeball", component: "pokeball-comp"},
{ path:"(.*)", component: "home-page"}
])