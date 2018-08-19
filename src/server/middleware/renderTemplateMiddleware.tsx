import serverConfig from "config/server.config";
import { Response } from "express";
import fs from "fs";
import path from "path";

import { IRequest } from "server/serverTypes";


export default (req: IRequest, res: Response) => {
    const { store, pageContent } = req;

    // Loads a template
    const pathToHtml = path.join(
        serverConfig.path.assets,
        serverConfig.files.htmlTemplate,
    );

    let page = fs.readFileSync(pathToHtml, "utf8");

    if (store) {
        const stateString = "window.__INITIAL_STATE__";
        page = page.replace(stateString, `${stateString} = ${JSON.stringify(store.getState())}`);

        // insert the server-side rendered data
        if (pageContent !== null)
            page = page.replace("<!--REACT ROOT-->", pageContent);
    }

    res.send(page);
};
