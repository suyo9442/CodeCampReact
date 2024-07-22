import '@/styles/reset.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }) {
  // Graphql Setting
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache, // 캐시는 메모리에 저장할게
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
