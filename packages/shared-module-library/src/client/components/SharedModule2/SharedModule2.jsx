import React from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';


import './style.scss';

const SharedModule2 = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div className="shared-module-2">
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
};

export default SharedModule2;
