import React from "react";
import "./UserCreate.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { useNavigate } from "react-router-dom";
import { dateToUSA } from "../../dataUtil";

import { USER_POST } from "../../api";

const UserCreate = () => {
  const name = useForm();
  const cpf = useForm();
  const firstDoseVaccine = useForm();
  const firstDoseDate = useForm();
  const secondDoseVaccine = useForm();
  const secondDoseDate = useForm();
  const thirdDoseVaccine = useForm();
  const thirdDoseDate = useForm();

  const navigate = useNavigate();

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      name: name.value,
      cpf: cpf.value,
      first_dose_vaccine: firstDoseVaccine.value,
      first_dose_date: dateToUSA(firstDoseDate.value),
      second_dose_vaccine: secondDoseVaccine.value,
      second_dose_date: dateToUSA(secondDoseDate.value),
      third_dose_vaccine: thirdDoseVaccine.value,
      third_dose_date: dateToUSA(thirdDoseDate.value),
    });
    const { response } = await request(url, options);

    if (response.ok) navigate("/");
  }

  return (
    <section className="animeLeft container">
      <h1 className="title">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="CPF" type="text" name="cpf" {...cpf} />
        <Input
          label="Primeira Dose - Vacina"
          type="text"
          name="primeiradosevacina"
          {...firstDoseVaccine}
        />
        <Input
          label="Primeira Dose - Data"
          type="text"
          name="primeiradosedata"
          {...firstDoseDate}
        />

        <Input
          label="Segunda Dose - Vacina"
          type="text"
          name="segundadosevacina"
          {...secondDoseVaccine}
        />
        <Input
          label="Segunda Dose - Data"
          type="text"
          name="segundadosedata"
          {...secondDoseDate}
        />

        <Input
          label="Reforço - Vacina"
          type="text"
          name="reforcovacina"
          {...thirdDoseVaccine}
        />
        <Input
          label="Reforço - Data"
          type="text"
          name="reforcodata"
          {...thirdDoseDate}
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
