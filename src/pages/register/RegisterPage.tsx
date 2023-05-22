import React from 'react';
import {PageLayout} from '../../components/PageLayout';
import {Register} from '../../features/auth/widgets/Register';

export const RegisterPage = () => {
	return (
		<div>
			<PageLayout>
				<Register/>
			</PageLayout>
		</div>
	);
};
