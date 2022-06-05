import { PropsWithChildren, ReactNode } from 'react';
import Header from './Header';
import { useLayoutStyles } from './LayoutStyles';

const links: { label: string; link: string; icon: ReactNode }[] = [{ label: 'Home', link: '/' }];

const Layout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { classes } = useLayoutStyles();

	return (
		<div className={classes.page}>
			<Header links={links} />
			<main className={classes.main}>{children}</main>
		</div>
	);
};

export default Layout;
