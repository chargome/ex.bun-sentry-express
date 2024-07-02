import * as Sentry from '@sentry/bun';
import express from 'express';

const app = express();

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

app.get("/", async (req, res) => {
    res.send('Hi');
});


Sentry.setupExpressErrorHandler(app);

app.listen(3000, () => {
    console.log("listening");
})
