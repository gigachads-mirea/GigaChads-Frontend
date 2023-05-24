import {api} from '../../../config/store/api';
import {IServer} from '../../../config/types';

const AuthApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getServersList: builder.query<IServer[], void>({
			query: (params) => ({
				url: '/servers',
				method: 'GET',
				params: params
			}),
			providesTags: ['server'],
		}),
		getFullServersList: builder.query<IServer[], void>({
			query: () => ({
				url: '/servers',
				method: 'GET',
			}),
			providesTags: ['server'],
		}),
		getProfileInfo: builder.query<IServer[], any>({
			query: (params) => ({
				url: '/users',
				method: 'GET',
				params: params
			}),
			providesTags: ['server'],
		}),
	})
});

export const {useGetServersListQuery, useGetFullServersListQuery, useGetProfileInfoQuery} = AuthApi;
