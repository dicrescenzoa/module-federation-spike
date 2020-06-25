import React from 'react';
import express from "express";
import path from "path";
import regeneratorRuntime from "regenerator-runtime";

import { renderToString } from 'react-dom/server';

import ReactApp from '../client/App';

const app = express();

// app.use(
//   "*",
//   (req, res, next) => {
//     setTimeout(next, 3000);
//   }
// );

app.use(express.static(path.join(__dirname, "../client")));

const renderReactApp = async (req, res) => {
  try {
    const RENDERED_REACT_APP = await renderToString(<ReactApp />);

    const html = `
<script src="http://localhost:3003/remoteEntry.js" charset="utf-8" ></script>
<div id="root">${RENDERED_REACT_APP}</div>
<script src="http://localhost:3001/main.js" charset="utf-8" ></script>
    `;

    res.send(html);
  } catch (e) {
    console.log(e);
    res.send('something went wrong');
  }
};

app.get("/", renderReactApp);

app.listen(3001, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:3001/`);
});
