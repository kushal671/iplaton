export default {
	breakpoints: ['768px', '1024px', '1200px'],
	colors: {
		black: '#000000',
		primary: '#292929',
		text: '#5A5A5A',
		menu: '#757575',
		darkgray: '#999999',
		muted: '#E6E6E6',
		lightgray: '#F3F3F3',
		lightergray: '#F9F9F9',
		background: '#F7F7F7',
		white: '#ffffff',
		facebook: '#3b5998',
		twitter: '#0084b4',
		youtube: '#c4302b',
		github: '#211F1F',
		instagram: '#cd486b',
		linkedin: '#0e76a8',
		badge: '#FF5A5F',
	},
	fonts: {
		body: 'Open Sans, sans-serif',
		heading: 'Poppins, serif',
	},
	fontSizes: [13, 15, 19, 20, 30],
	lineHeights: {
		body: 'initial',
		heading: 'initial',
	},
	fontWeights: {
		body: 400,
		heading: 700,
	},
	sizes: {
		container: '1240px',
	},
	buttons: {
		primary: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			minWidth: [130, 172],
			minHeight: [40, 50],
			borderRadius: 6,
			fontWeight: 700,
			textTransform: 'capitalize',
			transition: 'opacity 0.2s ease',
			svg: {
				width: [16, 18],
				height: [16, 18],
				marginLeft: 10,
			},
			':focus': {
				outline: 'none',
			},
			':hover': {
				opacity: 0.9,
			},
		},
		white: {
			color: 'primary',
			backgroundColor: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			minWidth: [130, 172],
			minHeight: [40, 50],
			borderRadius: 6,
			fontWeight: 700,
			textTransform: 'capitalize',
			transition: 'all 0.2s ease',
			svg: {
				width: [16, 18],
				height: [16, 18],
				marginLeft: 10,
			},
			':focus': {
				outline: 'none',
			},
			':hover': {
				backgroundColor: 'lightgray',
			},
		},
		badge: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			borderRadius: 6,
			minWidth: 38,
			minHeight: 28,
			backgroundColor: 'lightgray',
			padding: 0,
			transition: 'background-color 0.2s ease',
			':focus': {
				outline: 'none',
			},
			':hover': {
				backgroundColor: 'muted',
			},
		},
		text: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			borderRadius: 6,
			minWidth: 48,
			minHeight: 48,
			color: 'primary',
			backgroundColor: 'transparent',
			padding: 0,
			svg: {
				width: 30,
				height: 30,
			},
			':focus': {
				outline: 'none',
			},
		},
	},
	layout: {
		container: {
			paddingX: '20px',
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			fontSize: [0, 1],
			WebkitTapHighlightColor: 'transparent',
			WebkitFontSmoothing: 'antialiased',
			textShadow: 'rgba(0, 0, 0, 0.004) 1px 1px 1px',
			p: {
				lineHeight: [2, 1.4],
			},
			'.drawer-content-wrapper': {
				maxWidth: 480,
				'@media only screen and (max-width: 1080px)': {
					footer: {
						maxWidth: 480,
						width: '100%',
						position: 'fixed',
						paddingTop: 0,
						bottom: 0,
						left: 0,
						zIndex: 1,
						'> div': {
							justifyContent: 'center',
						},
						'.copyright': {
							display: 'none',
						},
					},
				},
			},
		},
	},
};
