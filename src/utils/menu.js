import CarListPage from "../pages/CarListPage";
import Login from "../pages/Login";
import Home from "../pages/Home";

export default [
    {
      id: 1,
      title: "home",
      url: "/",
      roles: [],
      component: Home
    },
    {
      id: 2,
      title: "login",
      url: "/login",
      roles: [],
      component: Login
    },
    {
      id: 3,
      title: "carList",
      url: "/car-list",
      roles: [],
      component: CarListPage

    }

]
