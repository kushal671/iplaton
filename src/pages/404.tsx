import React from 'react';
import { Container } from 'theme-ui';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';

const NotFoundPage: React.FC<{}> = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Container py="40px">
			<h1>Page not found :(</h1>
		</Container>
	</Layout>
);

export default NotFoundPage;
