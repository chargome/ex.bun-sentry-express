import * as Sentry from "@sentry/bun";

Sentry.init({
  dsn: "<YOUR_DSN>",
  tracesSampleRate: 1.0,
  debug: true,
});
