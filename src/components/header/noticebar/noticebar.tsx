/** @jsx jsx */
import React, { Fragment } from 'react';
import { Box, Container, Button, jsx } from 'theme-ui';
import { StaticQuery, graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import styles from './noticebar.style';

const Noticebar: React.FC<any> = ({ handleCloseNotice }) => (
	<StaticQuery<GatsbyTypes.Query>
		query={graphql`
			query {
				prismic {
					allCommons {
						edges {
							node {
								top_header_color
								special_notice_title
								header_notice_switch
							}
						}
					}
				}
			}
		`}
		render={({ prismic }) => {
			const node = prismic?.allCommons?.edges[0]?.node;
			const isSwitch = node?.header_notice_switch;
			const title = node?.special_notice_title;
			const bgColor = node?.top_header_color;
			return (
				<Fragment>
					{isSwitch ? (
						<Box
							sx={{
								...styles.wrapper,
								backgroundColor: bgColor ? bgColor : 'primary',
							}}
						>
							<Container sx={styles.container}>
								{RichText.asText(title)}
								<Button
									title="Close"
									variant="text"
									onClick={handleCloseNotice}
								>
									<svg width="14" height="14" viewBox="0 0 14 14">
										<path
											id="close"
											d="M6.115,4.792A.936.936,0,0,0,4.792,6.115l5.4,5.4-5.4,5.4a.936.936,0,0,0,1.323,1.323l5.4-5.4,5.4,5.4a.936.936,0,0,0,1.323-1.323l-5.4-5.4,5.4-5.4a.936.936,0,1,0-1.323-1.323l-5.4,5.4Z"
											transform="translate(-4.518 -4.518)"
											fill="#ffffff"
										/>
									</svg>
								</Button>
							</Container>
						</Box>
					) : null}
				</Fragment>
			);
		}}
	/>
);

export default Noticebar;
