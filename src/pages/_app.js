import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';

// Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: red;
    --bg: red;
  }

  [data-theme="dark"] {
    --fg: blue;
    --bg: blue;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
