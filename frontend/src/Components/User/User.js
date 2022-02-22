import React from 'react';
import { dateToBrazil } from '../../util';
import { Link } from 'react-router-dom';
import styles from './User.module.css';
import { ReactComponent as Delete } from '../../Assets/delete.svg';
import { ReactComponent as Edit } from '../../Assets/edit.svg';
import { USER_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const User = ({ user }) => {
  const { request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm(
      `Tem certeza que deseja deletar o usuário de CPF: ${user.cpf} ? `
    );
    if (confirm) {
      const { url, options } = USER_DELETE(user.id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.cpf}</td>
      <td>{user.first_dose_vaccine ? user.first_dose_vaccine : '-'}</td>
      <td>{user.first_dose_date ? dateToBrazil(user.first_dose_date) : '-'}</td>
      <td>{user.second_dose_vaccine ? user.second_dose_vaccine : '-'}</td>
      <td>
        {user.second_dose_date ? dateToBrazil(user.second_dose_date) : '-'}
      </td>
      <td>{user.third_dose_vaccine ? user.third_dose_vaccine : '-'}</td>
      <td>{user.third_dose_date ? dateToBrazil(user.third_dose_date) : '-'}</td>
      <td className={styles.actions}>
        <Link
          data-testid='edit-link'
          className={styles.edit}
          to={`/edicao/${user.id}`}
        >
          <Edit />
        </Link>
        <button
          data-testid='delete-button'
          className={styles.delete}
          onClick={handleClick}
        >
          <Delete />
        </button>
      </td>
    </tr>
  );
};

export default User;
