import React from "react";
import "./UserCreate.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

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

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      name: name.value,
      cpf: cpf.value,
    });
    const { response } = await request(url, options);

    if (response.ok) console.log("ir pra listagem");
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="CPF" type="cpf" name="cpf" {...cpf} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {/* <Error error={error} /> */}
      </form>
    </section>
  );
};

export default UserCreate;
