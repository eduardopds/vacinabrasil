import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { USER_GET_ID, USER_PUT } from '../../../api';
import useFetch from '../../../Hooks/useFetch';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';

const UserUpdate = () => {
  const { id } = useParams();
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

  useEffect(() => {
    async function fetchUser() {
      const { url, options } = USER_GET_ID(id);
      const { json } = await request(url, options);

      setUser({
        name: json.name,
        cpf: json.cpf,
        firstDoseVaccine: json.first_dose_vaccine,
        firstDoseDate: json.first_dose_date,
        secondDoseVaccine: json.second_dose_vaccine,
        secondDoseDate: json.second_dose_date,
        thirdDoseVaccine: json.third_dose_vaccine,
        thirdDoseDate: json.third_dose_date,
      });
    }

    fetchUser();
  }, [request, id]);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_PUT(id, {
      name: user.name,
      cpf: user.cpf,
      first_dose_vaccine: user.firstDoseVaccine,
      first_dose_date: user.firstDoseDate,
      second_dose_vaccine: user.secondDoseVaccine,
      second_dose_date: user.secondDoseDate,
      third_dose_vaccine: user.thirdDoseVaccine,
      third_dose_date: user.thirdDoseDate,
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
      <h1 className='title'>Atualizar</h1>
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
          type='text'
          name='cpf'
          maxLength='14'
          value={user.cpf}
          placeholder='000.000.000-00'
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
          type='date'
          name='firstDoseDate'
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
          type='date'
          name='secondDoseDate'
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
          type='date'
          name='thirdDoseDate'
          value={user.thirdDoseDate}
          onChange={handleInputChange}
        />

        {loading ? (
          <Button disabled>Atualizando...</Button>
        ) : (
          <Button>Atualizar</Button>
        )}
        {/* Criar componente <Error error={error} /> */}
      </form>
    </section>
  );
};

export default UserUpdate;
