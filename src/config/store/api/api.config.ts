import {createApi, retry} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

import type {AxiosError, AxiosRequestConfig} from 'axios';
import type {BaseQueryFn} from '@reduxjs/toolkit/query/react';

interface IAxiosBaseQueryArgs {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
}

interface IAxiosBaseQueryError {
    status?: number;
    data?: unknown
}

const axiosBaseQuery = ({baseUrl}: { baseUrl: string } = {baseUrl: ''}): BaseQueryFn<IAxiosBaseQueryArgs, unknown, IAxiosBaseQueryError> =>
	async ({url, method, data, params}) => {
		const headers = {
			// authorization: 'Bearer ' + getToken()
		};

		const result = await axios({url: baseUrl + url, method, data, params, timeout: 10000, headers})
			.then((result) => ({data: result.data}))
			.catch((err: AxiosError) => ({
				error: {
					status: err.response?.status,
					data: err.response?.data ?? err.message,
				}
			}));

		return result;
	};

const baseQuery = axiosBaseQuery({baseUrl: 'http://localhost:5000'  ?? ''});
const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3});

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	tagTypes: ['user', 'article'],
	endpoints: () => ({}),
});

export default api;
