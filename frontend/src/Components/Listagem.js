import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { USER_GET } from "../api";
import User from "./User/User";
import "./Listagem.css";

const Listagem = ({ filter }) => {
  // o filtro aplicado a listagem
  console.log(filter);

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchUsers() {
      const { url, options } = USER_GET();
      const { response, json } = await request(url, options);
      console.log(json);
    }

    fetchUsers();
  }, [request]);

  if (data)
    return (
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
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    );
  else return null;
};

export default Listagem;
