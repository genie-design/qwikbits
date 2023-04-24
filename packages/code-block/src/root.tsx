import { App } from "./app";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
        <link
          id="pico-css"
          rel="stylesheet"
          href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"
        ></link>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
