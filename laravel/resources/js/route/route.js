import HomeComponent from "../components/HomeComponent.vue";
import LoginComponent from "../page/LoginComponent.vue";
import CreateComponent from "../components/CreateComponent.vue";
import IndexComponent from "../components/IndexComponent.vue";
import EditComponent from "../components/EditComponent.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "login",
    path: "/login",
    component: LoginComponent,
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent,
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent,
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditComponent,
  },
];

export default routes;
