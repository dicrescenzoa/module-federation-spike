import React from 'react';
import { useQuery, ApolloProvider } from '@apollo/react-hooks';
import {getDataFromTree, renderToStringWithData} from "@apollo/react-ssr";
import { gql } from "apollo-boost";

import ApolloClient from './ApolloClient';

import './style.scss';

const QUERY = gql`
    {
        characters(page: 1) {
            results {
                name
            }
        }
    }
`;

const SharedModule2 = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="shared-module-2">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
};

const SharedModule2WithApollo = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <SharedModule2 />
    </ApolloProvider>
  );
};

export const ApolloClientInstance = ApolloClient;

export const get__FCA_SHARED_MODULE_2_STATE__ = async (ReactApp) => {
  await ApolloClientInstance.resetStore();
  await getDataFromTree(ReactApp)
  return ApolloClientInstance.extract();
};

export default SharedModule2WithApollo;
