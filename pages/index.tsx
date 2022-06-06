import GradientCard from '@/components/GradientCard';
import { Hero } from '@/components/Hero';
import { Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { CgPrinter, CgUser } from 'react-icons/cg';

const Home = () => {
	return (
		<>
			<Hero />
			<Container size='lg' py={128}>
				<Group position='center'>
					<Stack sx={{ maxWidth: 300 }}>
						<Text component='h1' m={0} sx={{ fontSize: 32, fontWeight: 900 }}>
							We do things that no other organization can.
						</Text>
						<Text component='p' color='dimmed' m={0}>
							We have resources that allow us to go beyond any other organization. We
							use these resources to benefit people in various ways.
						</Text>
					</Stack>
					<SimpleGrid cols={2}>
						<GradientCard p='md' shadow='md' sx={{ maxWidth: 200 }}>
							<CgUser color='white' size={32} />
							<Text color='white'>We help people with our resources.</Text>
						</GradientCard>
						<GradientCard p='md' shadow='md' sx={{ maxWidth: 200 }}>
							<CgPrinter color='white' size={32} />
							<Text color='white'>We develop electronics with our resources.</Text>
						</GradientCard>
						<GradientCard p='md' shadow='md' sx={{ maxWidth: 200 }}>
							<CgUser color='white' size={32} />
							<Text color='white'>We help people with our resources.</Text>
						</GradientCard>
						<GradientCard p='md' shadow='md' sx={{ maxWidth: 200 }}>
							<CgPrinter color='white' size={32} />
							<Text color='white'>We develop electronics with our resources.</Text>
						</GradientCard>
					</SimpleGrid>
				</Group>
			</Container>
		</>
	);
};

export default Home;
