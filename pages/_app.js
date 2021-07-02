import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          @font-face {
            font-family: "NHaasGrotesk";
            src: URL("NHaasGroteskDSPro-55Rg.ttf") format("truetype");
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
