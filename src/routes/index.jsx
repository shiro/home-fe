import HelloWorld from "components/HelloWorld/HelloWorld";
import PageNotFound from "components/NotFound/NotFound";


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
