import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7k40u13pt01z2cx4lbbam/master',
	cache: new InMemoryCache(),
});
