import './style.css';
console.log('vanilla');

import "./apps/post/post.component"
import "./apps/pages/home.page"
import "./apps/pages/post.page"
import "./apps/pages/descarga.page"
import "./apps/layouts/holy.layout"
import "genk-poc-jesus/genk-poc"
import "heart-comp/heart-comp"
import "./apps/pokemon/poke.component"


import {Router} from "@vaadin/router";

const outlet= document.getElementById("outlet")
const router= new Router(outlet);
router.setRoutes([
{ path:"/", component: "home-page"},
{ path: "/post", component: "post-page"},
{ path: "/desc", component: "descarga-comp"},
{ path:"(.*)", component: "home-page"}
])