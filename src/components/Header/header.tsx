import React from 'react';
import {Button, Navbar, Text} from '@nextui-org/react';
import {Layout} from '../Layout/layout';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {
	const {query, push} = useRouter();

	const goToPage = (pathname: string) => () => push({pathname, query});

	return (
		<Layout>
			<Navbar isBordered variant={'static'}>
				<Navbar.Brand>
					<Text b color="inherit" hideIn="xs">
						Gigachads
					</Text>
				</Navbar.Brand>

				<Navbar.Content hideIn="xs">
					<Button auto light onClick={goToPage('/')}>
						Список серверов
					</Button>
					{query['logged'] && (
						<>
							<Button auto light onClick={goToPage('/form')}>
								Создать сервер
							</Button>
							<Button auto light onClick={goToPage('/compare')}>
								Сравнение серверов
							</Button>
							<Button auto light onClick={goToPage('/account')}>
								Аккаунт
							</Button>
						</>
					)}
				</Navbar.Content>
				{!query['logged'] && (
					<Navbar.Content>
						<Navbar.Item>
							<Button auto flat as={Link} href="/login">
								Войти
							</Button>
						</Navbar.Item>
						<Navbar.Item>
							<Button auto as={Link} href="/register" color={'gradient'}>
								Создать аккаунт
							</Button>
						</Navbar.Item>
					</Navbar.Content>
				)}
			</Navbar>
		</Layout>
	);
};

export default Header;
