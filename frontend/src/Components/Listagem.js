import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { USER_GET } from "../api";
import User from "./User";

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
      <ul>
        {data.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    );
  else return null;
};

export default Listagem;
