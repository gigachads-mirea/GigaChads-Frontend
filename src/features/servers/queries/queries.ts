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
				url: '/servers/all',
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
		addServerToFavouriteList: builder.mutation<any, any>({
			query: (params) => ({
				url: '/favServer',
				method: 'PATCH',
				body: params
			}),
			invalidatesTags: ['server']
		}),
		deleteServerFromList: builder.mutation<any, any>({
			query: (params) => ({
				url: '/servers/'+params.id,
				method: 'DELETE',
			}),
			invalidatesTags: ['server']
		}),
		updateUserServersList: builder.mutation<IServer[], any>({
			query: (params) => ({
				url: '/users/'+params.id,
				method: 'PUT',
				body: {...params.body}//<----ошибка тут, посмотреть
			}),
			invalidatesTags: ['server']
		}),

	})
});

export const {useGetServersListQuery, useGetFullServersListQuery, useGetProfileInfoQuery, useAddServerToFavouriteListMutation, useDeleteServerFromListMutation, useUpdateUserServersListMutation} = AuthApi;
