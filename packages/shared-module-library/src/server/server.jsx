import React from 'react';
import express from "express";
import path from "path";
import {renderToStringWithData} from "@apollo/react-ssr";
import regeneratorRuntime from "regenerator-runtime";

import { get__FCA_SHARED_MODULE_2_STATE__ } from '../client/components/SharedModule2/SharedModule2';
import { get__FCA_SHARED_MODULE_3_STATE__ } from '../client/components/SharedModule3/SharedModule3';

import ReactApp from '../client/App';

const app = express();

app.use(express.static(path.join(__dirname, "../client")));

const renderReactApp = async (req, res) => {
  try {
    const __FCA_SHARED_MODULE_2_STATE__ = await get__FCA_SHARED_MODULE_2_STATE__(ReactApp);
    const __FCA_SHARED_MODULE_3_STATE__ = await get__FCA_SHARED_MODULE_3_STATE__(ReactApp);
    const RENDERED_REACT_APP = await renderToStringWithData(<ReactApp />);

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>shared-module-library</title>
</head>
<body>
<div id="root">${RENDERED_REACT_APP}</div>
<script src="/main.js" charset="utf-8" ></script>
<script>
      window.__FCA_SHARED_MODULE_2_STATE__=${JSON.stringify(
      __FCA_SHARED_MODULE_2_STATE__
    ).replace(/</g, "\\\u003c")}
      
      window.__FCA_SHARED_MODULE_3_STATE__=${JSON.stringify(
      __FCA_SHARED_MODULE_3_STATE__
    ).replace(/</g, "\\\u003c")}
</script>
</body>
</html>
    `;

    res.send(html);
  } catch (e) {
    console.log(e);
    res.send('something went wrong');
  }
};

app.get("/", renderReactApp);

app.listen(3003, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:3003/`);
});
