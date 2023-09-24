'use client';
import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
// import { usePathname, useRouter } from 'next/navigation';
import client from '../../lib/client';

const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  //   const router = useRouter();
  //   const pathname = usePathname();

  //   console.log('router', router);
  //   console.log('pathname', pathname);
  return (
    <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
  );
};

export default ApolloProvider;
