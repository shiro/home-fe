import serverConfig from "config/server";
import fs from "fs";
import path from "path";


export default (req, res) => {
    const { store, pageContent } = req;

    // Loads a template
    const pathToHtml = path.join(
        serverConfig.path.assets,
        serverConfig.files.htmlTemplate,
    );

    let page = fs.readFileSync(pathToHtml, "utf8");

    if(store) {
        const stateString = "window.__INITIAL_STATE__";
        page = page.replace(stateString, `${stateString} = ${JSON.stringify(store.getState())}`);

        // Inserts server-side rendered data
        if(pageContent)
            page = page.replace("{CONTENT}", pageContent);
    }

    res.send(page);
};
