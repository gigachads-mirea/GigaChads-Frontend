import {api} from '../../../config/store/api';
import {IServer} from '../../../config/types';

const AuthApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getServersList: builder.query<IServer[], { filter?: any }>({
			query: (arg) => ({
				url: '/servers',
				method: 'GET',
				params: {
					'name_like': arg.filter?.name,
					'id': arg.filter?.id,
					'approved': arg.filter?.approved
				}
			}),
			providesTags: ['server'],
		}),
		createServer: builder.mutation<any, any>({
			query: (params) => ({
				url: '/servers',
				method: 'POST',
				data: params
			}),
			invalidatesTags: ['server']
		}),
		deleteServer: builder.mutation<any, any>({
			query: (arg) => ({
				url: '/servers/' + arg,
				method: 'DELETE',
			}),
			invalidatesTags: ['server']
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
				url: '/favourites',
				method: 'POST',
				data: {SID: params}
			}),
			invalidatesTags: ['server']
		}),
		deleteServerFromFavouriteList: builder.mutation<any, any>({
			query: (arg) => ({
				url: '/favourites/' + arg,
				method: 'DELETE',
			}),
			invalidatesTags: ['server']
		}),
		getFavourites: builder.query<any, any>({
			query: (arg) => ({
				url: '/favourites/',
				method: 'GET',
				params: arg && {SID: arg}
			}),
			providesTags: ['server'],
		}),

		addServerToOwnList: builder.mutation<any, any>({
			query: (params) => ({
				url: '/own',
				method: 'POST',
				data: {SID: params}
			}),
			invalidatesTags: ['server']
		}),
		deleteServerFromOwnList: builder.mutation<any, any>({
			query: (arg) => ({
				url: '/own/' + arg,
				method: 'DELETE',
			}),
			invalidatesTags: ['server']
		}),
		getOwns: builder.query<any, any>({
			query: (arg) => ({
				url: '/own/' + arg,
				method: 'GET',
			}),
			providesTags: ['server'],
		}),


		addServerToCompareList: builder.mutation<any, any>({
			query: (params) => ({
				url: '/compare',
				method: 'POST',
				data: {SID: params}
			}),
			invalidatesTags: ['server']
		}),
		deleteServerFromCompareList: builder.mutation<any, any>({
			query: (arg) => ({
				url: '/compare/' + arg,
				method: 'DELETE',
			}),
			invalidatesTags: ['server']
		}),
		getCompare: builder.query<any, any>({
			query: (arg) => ({
				url: '/compare/',
				method: 'GET',
				params: arg && {SID: arg}
			}),
			providesTags: ['server'],
		}),

	})
});

export const {
	useGetServersListQuery,
	useGetProfileInfoQuery,
	useAddServerToFavouriteListMutation,
	useDeleteServerFromFavouriteListMutation,
	useGetFavouritesQuery,
	useGetOwnsQuery,
	useDeleteServerFromOwnListMutation,
	useAddServerToOwnListMutation,
	useDeleteServerMutation,
	useCreateServerMutation,

	useGetCompareQuery,
	useAddServerToCompareListMutation,
	useDeleteServerFromCompareListMutation
} = AuthApi;
