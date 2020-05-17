/** @jsx jsx */
import { Link } from 'gatsby';
import { Box, Image, jsx } from 'theme-ui';
import styles from './logo.style';

type PropsType = {
	imgSrc: string;
	imgAlt?: string;
};

const Logo: React.FC<PropsType> = ({ imgSrc, imgAlt }) => {
	return (
		<Box className="logo" sx={styles.wrapper}>
			<Link to="/">
				<Image
					sx={styles.logo}
					src={imgSrc}
					alt={imgAlt ? imgAlt : 'Site Logo'}
				/>
			</Link>
		</Box>
	);
};

export default Logo;
