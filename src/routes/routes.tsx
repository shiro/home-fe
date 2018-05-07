import HelloWorld from "components/HelloWorld/HelloWorld";
import PageLayout from "components/Layout/Page/PageLayout";
import NotFound from "components/NotFound/NotFound";


const routes =
    [{
        component: PageLayout,
        routes:
            [
                {
                    component: HelloWorld,
                    exact: true,
                    path: "/",
                },
                {
                    component: NotFound,
                    path: "*",
                },
            ],
    }];


export default routes;
