import React, { lazy, useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
import Loading from '../Helper/Loading/Loading';

const StatsGraphs = lazy(() => import('./StatsGraphs'));
const UserStats = () => {
  const { data, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <StatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
