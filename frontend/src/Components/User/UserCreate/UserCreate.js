import React, { useState } from 'react';
import './UserCreate.css';
import useFetch from '../../../Hooks/useFetch';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { dateToUSA, maskCPF, maskDate } from '../../../util';

import { USER_POST } from '../../../api';

const UserCreate = () => {
  const [user, setUser] = useState({
    name: '',
    cpf: '',
    firstDoseVaccine: '',
    firstDoseDate: '',
    secondDoseVaccine: '',
    secondDoseDate: '',
    thirdDoseVaccine: '',
    thirdDoseDate: '',
  });

  const navigate = useNavigate();

  const { loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      name: user.name,
      cpf: user.cpf,
      first_dose_vaccine: user.firstDoseVaccine,
      first_dose_date: dateToUSA(user.firstDoseDate),
      second_dose_vaccine: user.secondDoseVaccine,
      second_dose_date: dateToUSA(user.secondDoseDate),
      third_dose_vaccine: user.thirdDoseVaccine,
      third_dose_date: dateToUSA(user.thirdDoseDate),
    });
    const { response } = await request(url, options);

    if (response.ok) navigate('/');
  }

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUser({ ...user, [name]: value });
  }

  return (
    <section className='animeLeft container'>
      <h1 className='title'>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nome'
          type='text'
          name='name'
          value={user.name}
          onChange={handleInputChange}
        />
        <Input
          label='CPF'
          mask={maskCPF}
          type='text'
          name='cpf'
          maxLength='14'
          value={user.cpf}
          onChange={handleInputChange}
        />
        <Input
          label='D1 - Vacina'
          type='text'
          name='firstDoseVaccine'
          value={user.firstDoseVaccine}
          onChange={handleInputChange}
        />
        <Input
          label='D1 - Data'
          type='text'
          name='firstDoseDate'
          maxLength='10'
          mask={maskDate}
          value={user.firstDoseDate}
          onChange={handleInputChange}
        />

        <Input
          label='D2 - Vacina'
          type='text'
          name='secondDoseVaccine'
          value={user.secondDoseVaccine}
          onChange={handleInputChange}
        />
        <Input
          label='D2 - Data'
          type='text'
          name='secondDoseDate'
          maxLength='10'
          mask={maskDate}
          value={user.secondDoseDate}
          onChange={handleInputChange}
        />

        <Input
          label='Reforço - Vacina'
          type='text'
          name='thirdDoseVaccine'
          value={user.thirdDoseVaccine}
          onChange={handleInputChange}
        />
        <Input
          label='Reforço - Data'
          type='text'
          name='thirdDoseDate'
          maxLength='10'
          value={user.thirdDoseDate}
          mask={maskDate}
          onChange={handleInputChange}
        />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {/* Criar componente <Error error={error} /> */}
      </form>
    </section>
  );
};

export default UserCreate;
