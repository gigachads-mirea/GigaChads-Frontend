import {api} from '../../../config/store/api';
import {IServer} from '../../../config/types';

const AuthApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getServersList: builder.query<IServer[], void>({
			query: () => ({
				url: '/servers',
				method: 'GET',
			}),
			providesTags: ['server'],
		}),
	})
});

export const {useGetServersListQuery} = AuthApi;
