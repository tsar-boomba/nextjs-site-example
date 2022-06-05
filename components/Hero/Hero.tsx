import React from 'react';
import { createStyles, Container, Title, Text, Button } from '@mantine/core';

const BG_COLOR = '#0c330e';

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: '#114b14',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, ${BG_COLOR} 85%), linear-gradient(90deg, rgba(6,35,67,0) 0%, ${BG_COLOR} 99%), url(https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
		paddingTop: theme.spacing.xl * 3,
		paddingBottom: theme.spacing.xl * 3,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('md')]: {
			flexDirection: 'column',
		},
	},

	image: {
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	content: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan('md')]: {
			marginRight: 0,
		},
	},

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,
		maxWidth: 500,
		fontSize: 48,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			fontSize: 34,
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: 500,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
		},
	},

	control: {
		paddingLeft: 50,
		paddingRight: 50,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 22,

		[theme.fn.smallerThan('md')]: {
			width: '100%',
		},
	},
}));

const Hero = () => {
	const { classes } = useStyles();
	return (
		<div style={{ backgroundColor: '#0c330e', width: '100%' }}>
			<div>
				<Container size='lg' className={classes.root}>
					<div className={classes.inner}>
						<div className={classes.content}>
							<Title className={classes.title}>
								Come to{' '}
								<Text
									component='span'
									inherit
									variant='gradient'
									gradient={{ from: 'blue', to: 'indigo' }}
								>
									Organization
								</Text>
							</Title>

							<Text className={classes.description} mt={30}>
								An organization which is matched by no other. We are very organized
								here. We serve over 2,000 organized people - making us the most
								organized BYT in the US.
							</Text>

							<Button
								variant='gradient'
								gradient={{ from: 'blue', to: 'indigo' }}
								size='xl'
								className={classes.control}
								mt={40}
							>
								Get started
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Hero;
