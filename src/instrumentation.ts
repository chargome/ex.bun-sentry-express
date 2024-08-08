import * as Sentry from "@sentry/bun";

Sentry.init({
  dsn: "",
  tracesSampleRate: 1.0,
  debug: true,
});
