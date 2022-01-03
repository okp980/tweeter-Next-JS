import type { AppProps } from "next/app";
import { Reset } from "styled-reset";
import Layout from "../components/Layout/Layout";
import GlobalStyles from "../styles/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Reset />
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
