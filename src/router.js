import {Router} from "@vaadin/router";

const outlet= document.getElementById("outlet")
export const router= new Router(outlet);
router.setRoutes([
{ path:"/", component: "home-page"},
{ path: "/info/:id", component: "evolution-page" },
{ path: "/pokeball", component: "pokeball-comp"},
{ path:"(.*)", component: "page-404"}
])