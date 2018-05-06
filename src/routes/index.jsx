import HelloWorld from "components/HelloWorld";
import PageNotFound from "components/PageNotFound";


const routes =
    [
        {
            path: "/",
            exact: true,
            component: HelloWorld,
        },
        {
            path: "*",
            component: PageNotFound,
        },
    ];


export default routes;
