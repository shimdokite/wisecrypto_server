import axios from 'axios';

const { COINMARKETCAP_API, API_KEY } = process.env;

const instance = axios.create({
	baseURL: COINMARKETCAP_API,
	headers: {
		'X-CMC_PRO_API_KEY': API_KEY,
	},
	withCredentials: true,
});

export const getCoinMarketCap = async () => {
	const response = await instance.get(
		`/v1/cryptocurrency/listings/latest?limit=10`
	);

	return response.data.data;
};

export const getMarketImage = async (id: string) => {
	const response = await instance.get(`v2/cryptocurrency/info?id=${id}`);

	return response.data.data[id].logo;
};
