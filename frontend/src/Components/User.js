import React from "react";

const User = ({ user }) => {
  return (
    <li>
      <p>Nome: {user.name}</p>
      <p>CPF: {user.cpf}</p>
    </li>
  );
};

export default User;
