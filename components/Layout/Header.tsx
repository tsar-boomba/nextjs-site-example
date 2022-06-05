import React, { ReactNode, useEffect, useRef } from 'react';
import { createStyles, Container, Group, Burger, Text, Collapse, Paper } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import ThemeSwitch from './ThemeSwitch';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useStyles = createStyles((theme) => {
	return {
		root: {
			height: 60,
			borderBottom: `1px solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
			}`,
			position: 'fixed',
			width: '100%',
			top: 0,
			left: 0,
			zIndex: 999,
		},

		header: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
			position: 'relative',
			width: '100%',
		},

		title: {
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			fontSize: 30,
			fontWeight: 900,
			margin: 0,
			padding: 0,
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			[theme.fn.smallerThan('xs')]: {
				fontSize: 24,
			},
		},

		links: {
			display: 'flex',
			flexGrow: 1,
			justifyContent: 'center',
			[theme.fn.smallerThan('xs')]: {
				display: 'none',
			},
		},

		burger: {
			[theme.fn.largerThan('xs')]: {
				display: 'none',
			},
		},

		mobileMenu: {
			display: 'flex',
			flexDirection: 'column',
			position: 'absolute',
			top: '60px',
			width: '100%',
			left: 0,
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
			[theme.fn.largerThan('xs')]: {
				display: 'none',
				borderBottom: `1px solid ${
					theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
				}`,
			},
		},

		link: {
			display: 'block',
			lineHeight: 1,
			padding: '8px 12px',
			borderRadius: theme.radius.sm,
			textDecoration: 'none',
			color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
			fontSize: theme.fontSizes.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor:
					theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
			},

			[theme.fn.smallerThan('xs')]: {
				borderRadius: 0,
				paddingTop: theme.spacing.sm,
				paddingBottom: theme.spacing.sm,
			},
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
						: theme.colors[theme.primaryColor][0],
				color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
			},
		},
	};
});

interface HeaderSimpleProps {
	links: { link: string; label: string; icon: ReactNode }[];
}

const CLICK_OUT_EVENTS: (keyof DocumentEventMap)[] = ['touchstart', 'mousedown'];

const Header: React.FC<HeaderSimpleProps> = ({ links }) => {
	const [opened, toggleOpened] = useBooleanToggle(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const { classes, cx } = useStyles();

	useEffect(() => {
		const handler = () => toggleOpened(false);

		const listener = (e: Event) => {
			!menuRef.current?.contains(e.target as Node) &&
				!buttonRef.current?.contains(e.target as Node) &&
				handler();
		};

		CLICK_OUT_EVENTS.forEach((ev) => document.addEventListener(ev, listener));
		return () => CLICK_OUT_EVENTS.forEach((ev) => document.removeEventListener(ev, listener));
	}, [menuRef, buttonRef]);

	const items = links.map((link) => (
		<Link key={link.label} href={link.link}>
			<a
				href={link.link}
				className={cx(classes.link, {
					[classes.linkActive]: router.pathname === link.link,
				})}
				onClick={() => {
					toggleOpened(false);
				}}
			>
				{link.label}
			</a>
		</Link>
	));

	return (
		<Paper component='header' radius={0} shadow='md' className={classes.root}>
			<Container className={classes.header}>
				<Link href='/' passHref>
					<Text
						component='a'
						variant='gradient'
						className={classes.title}
						gradient={{
							from: 'blue',
							to: 'indigo',
							deg: 75,
						}}
						align='center'
					>
						Organization
					</Text>
				</Link>

				<nav style={{}} className={classes.links}>
					{items}
				</nav>

				<Burger
					opened={opened}
					ref={buttonRef}
					styles={{
						root: {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexGrow: 1,
						},
					}}
					onClick={() => toggleOpened()}
					className={classes.burger}
					size='sm'
				/>

				<Group>
					<ThemeSwitch />
				</Group>

				<div className={classes.mobileMenu} ref={menuRef}>
					<Collapse in={opened}>{items}</Collapse>
				</div>
			</Container>
		</Paper>
	);
};

export default Header;
