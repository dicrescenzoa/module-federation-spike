import React from 'react';
import { useQuery, ApolloProvider } from '@apollo/react-hooks';
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

export default SharedModule2WithApollo;
