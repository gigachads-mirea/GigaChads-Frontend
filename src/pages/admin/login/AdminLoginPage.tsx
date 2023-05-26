import React from 'react';
import {PageLayout} from '../../../components/PageLayout';
import { Login } from '../../../features/adminAuth/widgets/Login';



export const AdminLoginPage = () => {
	return (
			<PageLayout>
				<Login/>
			</PageLayout>
	);
};

export default AdminLoginPage;
