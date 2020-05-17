/** @jsx jsx */
import { useContext, useEffect, useState } from 'react';
import { Box, jsx } from 'theme-ui';
import Sticky from 'react-stickynode';
import LoadingBar from 'react-top-loading-bar';
import Noticebar from './noticebar/noticebar';
import Topbar from './topbar/topbar';
import Navbar from './navbar/navbar';
import { CartContext } from '../../provider/cart-provider';
import { SearchContext } from '../../provider/search-provider';
import useFreezeBodyScroll from '../../hooks/useFreezeBodyScroll';
import styles from './header.style';

const Header: React.FC<{}> = () => {
	const [notice, setNotice] = useState(true);
	useEffect(() => {
		const storedValue = window.localStorage.getItem('notice');
		const noticePreference = storedValue ? JSON.parse(storedValue) : true;
		setNotice(noticePreference);
	}, []);
	const handleCloseNotice = () => {
		setNotice(false);
		window.localStorage.setItem('notice', JSON.stringify(false));
	};

	const { isSearched } = useContext<any>(SearchContext);
	useFreezeBodyScroll(isSearched);

	const {
		store: { updating },
	} = useContext(CartContext);

	const addClass = [];
	if (notice) {
		addClass.push('isNoticeActive');
	}
	if (isSearched) {
		addClass.push('isSearchedActive');
	}

	return (
		<Box as="header" sx={styles.header}>
			{notice && <Noticebar handleCloseNotice={handleCloseNotice} />}
			{updating && <LoadingBar progress={100} height={3} color="#292929" />}
			<Box sx={styles.showOnlyDesktop} className={addClass.join(' ')}>
				<Topbar />
			</Box>
			<Box sx={styles.showOnlyTab}>
				<Sticky activeClass="active" innerZ={9}>
					<Topbar />
				</Sticky>
			</Box>
			<Box sx={styles.showOnlyDesktop}>
				<Sticky activeClass="active" innerZ={9}>
					<Navbar />
				</Sticky>
			</Box>
		</Box>
	);
};

export default Header;
