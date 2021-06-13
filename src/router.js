import {Router} from "@vaadin/router";

const outlet= document.getElementById("outlet")
export const router= new Router(outlet);
router.setRoutes([
{ path:"/", component: "home-page"},
{ path: "/post", component: "poke-comp"},
{ path: "/desc", component: "descarga-comp"},
{ path: "/info/:params", component: "info-comp" },
{ path:"(.*)", component: "home-page"}
])