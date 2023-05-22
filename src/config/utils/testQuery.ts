import {api} from '../store/api';

const AuthApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<undefined, void>({
			query: () => ({
				url: '/servers',
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
	})
});

export const {useGetUserQuery} = AuthApi;
