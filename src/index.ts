import "./instrumentation";

import * as Sentry from "@sentry/bun";
import express from "express";

const app = express();

app.get("/debug-sentry", function mainHandler() {
  throw new Error("My first Sentry error!");
});

app.get("/", async (_req, res) => {
  res.send("Yo");
});

Sentry.setupExpressErrorHandler(app);

app.listen(3030, () => {
  console.log("listening");
});
