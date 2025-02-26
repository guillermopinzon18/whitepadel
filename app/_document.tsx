import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Cambia el favicon aquí */}
        <link rel="icon" href="/logonegro.png" />
        {/* Otros elementos del <head> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}