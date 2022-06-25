import type { AppProps } from "next/app";
import { Reset } from "styled-reset";
import Layout from "../components/Layout/Layout";
import GlobalStyles from "../styles/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	const { pathname } = useRouter();
	return (
		<>
			<SessionProvider session={session}>
				<ThemeProvider theme={theme}>
					<Reset />
					<GlobalStyles />
					{pathname === "/auth/signin" ? (
						<Component {...pageProps} />
					) : (
						<Layout>
							<Component {...pageProps} />
						</Layout>
					)}
				</ThemeProvider>
			</SessionProvider>
		</>
	);
}

export default MyApp;
