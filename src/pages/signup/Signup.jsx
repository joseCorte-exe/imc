import React from 'react';
import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <main>
        <h1>Informe seus dados</h1>

        <section class="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="">Email</label>
            <br/>
            <input type="text" {...register("email")} placeholder="email@dominio.com"/>

            <label for="">Digite seu Nome</label>
            <br/>
            <input type="text" {...register("name")} placeholder="Nome completo"/>

            <label for="">Data de nascimento</label>
            <br/>
            <input type="text" {...register("birth")} placeholder="00/00/0000"/>

            <label for="">Gênero</label>
            <br/>
            <input type="text" {...register("gender")} placeholder="Masc/fem"/>

            <label for="">CPF</label>
            <br/>
            <input type="text" {...register("cpf")} placeholder="000.000.000-00"/>

            <label for="">Logradouro</label>
            <br/>
            <input type="text" {...register("logradouro")} placeholder="Logradouro"/>

            <label for="">Número Logradrouro</label>
            <br/>
            <input type="text" {...register("logradouroNumber")} placeholder="Nº logradouro"/>

            <label for="">CEP</label>
            <br/>
            <input type="text" {...register("cep")} placeholder="00000-000"/>

            <label for="ut">Cidade</label>
            <br/>
            <input type="text" {...register("city")} placeholder="São Paulo"/>

            <label for="">UF</label>
            <br/>
            <input type="text" {...register("uf")} placeholder="SP"/>
          </form>
        </section>
        <button type="submit">Cadastrar</button>
    </main>
  )
}
