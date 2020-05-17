/** @jsx jsx */
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { Box, Text, Button, jsx } from 'theme-ui';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './home-banner.style';
import bannerImg from '../../images/home-banner.png';

const HomeBanner = (props: any) => {
	const windowSize = useWindowSize();
	const [offset, setOffset] = useState(60);
	const { banner, bannerTitle, bannerSubTitle, bannerButtonText } = props;
	useEffect(() => {
		if (windowSize < 1081) {
			setOffset(80);
		} else {
			setOffset(60);
		}
	}, [windowSize]);

	return (
		<Box
			as="section"
			sx={{
				backgroundImage: `url(${
					banner && banner.url ? banner.url : bannerImg
				})`,
				...styles.banner,
			}}
		>
			<Box as="header" sx={styles.bannerContent}>
				<h1>{RichText.render(bannerTitle)}</h1>
				{RichText.render(bannerSubTitle)}
				<AnchorLink
					href="#feature"
					style={{ textDecoration: 'none' }}
					offset={() => offset}
				>
					<Button variant="white">
						<Text as="span">
							{bannerButtonText
								? RichText.asText(bannerButtonText)
								: 'Order Now'}
						</Text>
						<svg width="15.394" height="10" viewBox="0 0 15.394 10">
							<path
								d="M13.674,6.343,12.427,7.6l2.89,2.877-12.025.012,0,1.768,11.992-.012L12.444,15.1,13.7,16.343l4.988-5.012Z"
								transform="translate(-3.292 -6.343)"
							/>
						</svg>
					</Button>
				</AnchorLink>
			</Box>
		</Box>
	);
};

export default HomeBanner;
