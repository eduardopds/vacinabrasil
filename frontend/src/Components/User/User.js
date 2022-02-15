import React from "react";
import "./User.css";
import { dateToBrazil } from "../../dataUtil";

const User = ({ user }) => {
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.cpf}</td>
      <td>{user.first_dose_vaccine ? user.first_dose_vaccine : "-"}</td>
      <td>{user.first_dose_date ? dateToBrazil(user.first_dose_date) : "-"}</td>
      <td>{user.second_dose_vaccine ? user.second_dose_vaccine : "-"}</td>
      <td>
        {user.second_dose_date ? dateToBrazil(user.second_dose_date) : "-"}
      </td>
      <td>{user.third_dose_vaccine ? user.third_dose_vaccine : "-"}</td>
      <td>{user.third_dose_date ? dateToBrazil(user.third_dose_date) : "-"}</td>
    </tr>
  );
};

export default User;
