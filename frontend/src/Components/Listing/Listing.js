import React, { useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { USER_GET } from '../../api';
import User from '../User/User';
import './Listing.css';
import Loading from '../Helper/Loading/Loading';
import Search from '../Search/Search';

const Listing = () => {
  const options = [
    { value: 'name', label: 'Nome' },
    { value: 'cpf', label: 'CPF' },
  ];

  const { data, request, loading } = useFetch();
  const [busca, setBusca] = useState('');
  const [field, setField] = useState(options[0]);

  useEffect(() => {
    async function fetchUsers() {
      const { url, options } = USER_GET();
      await request(url, options);
    }

    fetchUsers();
  }, [request]);

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;

    setBusca(value);
  }

  function handleFieldChange(selected) {
    setField(selected);
  }

  return loading ? (
    <Loading></Loading>
  ) : (
    <>
      <Search
        onChange={handleInputChange}
        onChangeField={handleFieldChange}
        field={field}
        options={options}
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>D1 · Vacina</th>
            <th>D1 · Data</th>
            <th>D2 · Vacina</th>
            <th>D2 · Data</th>
            <th>Reforço · Vacina</th>
            <th>Reforço · Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
              .filter((item) =>
                item[`${field.value}`]
                  .toLowerCase()
                  .includes(busca.toLowerCase())
              )
              .map((user) => <User key={user.id} user={user} />)}
        </tbody>
      </table>
    </>
  );
};

export default Listing;
