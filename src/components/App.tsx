import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";

import NotFound from "components/NotFound/NotFound";
import config from "config/client.config.jsx";
import UnderConstruction from "components/UnderConstruction/UnderConstruction";
import NavigationBar from "components/NavigationBar/NavigationBar";
import SearchBox from "components/Search/SearchBox";
import CenterContainer from "components/Layout/CenterContainer/CenterContainer";
import PostPreviewContainer from "components/BlogSite/PostPreview/PostPreviewContainer";
import PostPreview from "components/BlogSite/PostPreview/PostPreview";


const mainComponent = config.branch === "master" ? UnderConstruction : null;

const App: React.FC = () => (
    <>
        <CenterContainer>
            <NavigationBar/>
            <SearchBox/>
        </CenterContainer>

        <PostPreviewContainer>
            {/*<PostPreview/>*/}
            {/*<PostPreview/>*/}
            {/*<PostPreview/>*/}
            {/*<PostPreview/>*/}
            {/*<PostPreview/>*/}
        </PostPreviewContainer>
        {/*<Switch>*/}
        {/*    <Route path="/blog" component={mainComponent}/>*/}
        {/*    <Route component={NotFound}/>*/}
        {/*</Switch>*/}
    </>
);


export default App;
