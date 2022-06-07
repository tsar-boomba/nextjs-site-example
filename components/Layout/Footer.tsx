import { Box, createStyles, Group, Text } from '@mantine/core';
import { IconType } from 'react-icons';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';

const useStyles = createStyles((theme) => ({
	root: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing.md,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},
}));

const SocialButton: React.VFC<{ icon: IconType; hover: string }> = ({ icon: Icon, hover }) => {
	return (
		<Box sx={{ '&:hover': { color: hover }, transition: 'color 0.3s ease', lineHeight: 1 }}>
			<Icon size={24} style={{ color: 'inherit' }} />
		</Box>
	);
};

const Footer = () => {
	const { classes } = useStyles();

	return (
		<footer className={classes.root}>
			<Text sx={{ fontWeight: 500 }}>© {new Date().getFullYear()}</Text>
			<Group>
				<a style={{ color: 'inherit' }} href='https://twitter.com'>
					<SocialButton icon={SiTwitter} hover='#00acee' />
				</a>
				<a style={{ color: 'inherit' }} href='https://twitter.com'>
					<SocialButton icon={SiFacebook} hover='#3b5998' />
				</a>
				<a style={{ color: 'inherit' }} href='https://twitter.com'>
					<SocialButton icon={SiInstagram} hover='#3f729b' />
				</a>
			</Group>
		</footer>
	);
};

export default Footer;
