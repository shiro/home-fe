import HelloWorld from "components/HelloWorld/HelloWorld";
import PageNotFound from "components/NotFound/NotFound";
import PageLayout from "components/Layout/Page/PageLayout";


const routes =
    [{
        component: PageLayout,
        routes:
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
            ]
    }];


export default routes;
