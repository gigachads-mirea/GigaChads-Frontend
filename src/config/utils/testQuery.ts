import {api} from '../store/api';

const AuthApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<undefined, void>({
			query: () => ({
				url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
	})
});

export const {useGetUserQuery} = AuthApi;
