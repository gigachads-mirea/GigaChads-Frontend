import React from 'react';
import {Button, Image, Navbar, Text} from '@nextui-org/react';
import {Layout} from '../Layout/layout';
import Link from 'next/link';

const Header = () => {
	return (
		<Layout>
			<Navbar isBordered variant={'static'}>
				<Navbar.Brand>
					<Image
						width={100}
						height={40}
						src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
						alt="Default Image"
						objectFit="cover"
					/>
					<Text b color="inherit" hideIn="xs">
						Gigachads
					</Text>
				</Navbar.Brand>

				<Navbar.Content hideIn="xs">
					<Navbar.Link href="/#">Servers</Navbar.Link>
					<Navbar.Link href="/form">Create</Navbar.Link>
					<Navbar.Link href="#">Compare</Navbar.Link>
					<Navbar.Link href="/account">Account(aka Favourite)</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Item>
						<Button auto flat as={Link} href="login">
							Войти
						</Button>
					</Navbar.Item>
					<Navbar.Item>
						<Button auto as={Link} href="register" color={'gradient'}>
							Создать аккаунт
						</Button>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
		</Layout>
	);
};

export default Header;
