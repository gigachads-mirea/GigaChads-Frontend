import React from 'react';
import {PageLayout} from '../../components/PageLayout';
import {Login} from '../../features/auth/widgets/Login';

export const LoginPage = () => {
	return (
		<div>
			<PageLayout>
				<Login/>
			</PageLayout>
		</div>
	);
};

export default LoginPage;
