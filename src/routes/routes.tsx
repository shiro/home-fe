import { RouteConfig } from "react-router-config";

import PageLayout from "components/Layout/PageLayout/PageLayout";
import NotFound from "components/NotFound/NotFound";
import HelloContainer from "containers/HelloContainer/HelloContainer";


const routes: RouteConfig[] =
    [{
        component: PageLayout,
        routes:
            [
                {
                    component: HelloContainer,
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
