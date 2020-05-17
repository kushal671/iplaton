/** @jsx jsx */
import { useState } from 'react';
import { ThemeProvider, Box, Container, jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';
import CartProvider from '../../provider/cart-provider';
import LocalCartProvider from '../../provider/local-cart-provider';
import SearchProvider from '../../provider/search-provider';
import Header from '../header/header';
import CartStatus from '../cart/';
import Footer from '../footer/footer';
import theme from '../../gatsby-plugin-theme-ui';

const Layout: React.FunctionComponent = ({ children }) => {
	const [cartBar, setCartBar] = useState(false);
	const cartBtnProps = useSpring({
		config: { mass: 1, tension: 500, friction: 48 },
		bottom: cartBar ? 87 : 30,
	});

	return (
		<ThemeProvider theme={theme}>
			<LocalCartProvider>
				<CartProvider>
					<SearchProvider>
						<Box
							as="main"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								minHeight: '100vh',
								overflow: 'hidden',
							}}
						>
							<Header />
							<Container sx={{ flexGrow: 1, py: [20, 30] }}>
								{children}
							</Container>
							<Waypoint
								onEnter={() => setCartBar(true)}
								onLeave={() => setCartBar(false)}
							/>
							<animated.div
								style={{ ...cartBtnProps, position: 'relative', zIndex: 9999 }}
							>
								<CartStatus btnProps={cartBtnProps} />
							</animated.div>
							<Footer />
						</Box>
					</SearchProvider>
				</CartProvider>
			</LocalCartProvider>
		</ThemeProvider>
	);
};

export default Layout;
