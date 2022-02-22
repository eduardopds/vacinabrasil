import React, { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { USER_GET } from '../../api';
import User from '../User/User';
import './Listagem.css';
import Loading from '../Helper/Loading/Loading';

const Listagem = ({ filter }) => {
  // o filtro aplicado a listagem
  console.log(filter);

  const { data, request, loading } = useFetch();

  useEffect(() => {
    async function fetchUsers() {
      const { url, options } = USER_GET();
      await request(url, options);
    }

    fetchUsers();
  }, [request]);

  return loading ? (
    <Loading></Loading>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>D1 - Vacina</th>
          <th>D1 - Data</th>
          <th>D2 - Vacina</th>
          <th>D2 - Data</th>
          <th>Reforço - Vacina</th>
          <th>Reforço - Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((user) => <User key={user.id} user={user} />)}
      </tbody>
    </table>
  );
};

export default Listagem;
