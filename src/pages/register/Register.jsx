import React, { useState, useEffect } from 'react'

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { api } from "../../service/api";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);

  const [ userData, setUserData ] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    sexo: "",
    cep: "",
    cpf: "",
    uf: "",
    cidade: "",
    logradouro: "",
    numeroLogradouro: "",
    email: ""
  })

  async function handleSubmitForm(data) {
    setUserData({
      nomeCompleto: data.name,
      dataNascimento: data.birth,
      sexo: data.gender,
      cep: data.cep,
      cpf: data.cpf,
      uf: data.uf,
      cidade: data.cidade,
      logradouro: data.publicPlace,
      numeroLogradouro: data.publicPlaceNumber,
      email: data.email
    })

    console.log(userData)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Seus dados</h1>

        <section>
          <div class="box-form-1">
            <div class="content-input">
              <label for="">Nome Completo</label>
              <input
                className={error ? "error" : ""}
                required
                type="text"
                placeholder="Nome Completo"
                {...register("name")}
              />
            </div>

            <div class="content-input">
              <label for="">E-mail</label>
              <input
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="E-mail"
                {...register("email")}
              />
            </div>

            <div class="content-input">
              <label for="">Data de Nascimento</label>
              <input
                required
                className={error ? "error" : ""}
                type="date"
                {...register("birth")}
              />
            </div>

            <div class="content-input">
              <label for="">Sexo</label>
              <select
                name=""
                id=""
                className={error ? "error" : ""}
                {...register("gender")}
              >
                <option value="" selected>
                  Selecione
                </option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <div class="content-input">
              <label for="">CPF</label>
              <input
                required
                className={error ? "error" : ""}
                type="number"
                placeholder="CPF"
                data-mask="000.000.000-00"
                {...register("cpf")}
              />
            </div>
          </div>

          <div class="box-form-2">
            <div class="content-input">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="CEP"
                data-mask="00000-000"
                {...register("cep")}
              />
            </div>

            <div htmlFor="logradouro" class="content-input">
              <label for="">Logradouro</label>
              <input
                id="logradouro"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Logradouro"
                {...register("publicPlace")}
              />
            </div>

            <div class="content-input">
              <label for="">Número</label>
              <input
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Número"
                {...register("publicPlaceNumber")}
              />
            </div>

            <div class="content-input">
              <label htmlFor="localidade">Cidade</label>
              <input
                id="localidade"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Cidade"
                {...register("city")}
              />
            </div>

            <div class="content-input">
              <label htmlFor="uf">UF</label>
              <input
                id="uf"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="UF"
                {...register("uf")}
              />
            </div>

            <div class="content-input">
              <label for="">Expectativa</label>
              <input
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Expectativa"
                {...register("expectation")}
              />
            </div>
          </div>
        </section>

        <div class="form-footer">
          <div class="attention">
            <h2>Preencha todos os campos</h2>
          </div>

          <div className="terms">
            <label>Eu aceito todos os termos e condições</label>
            <input type="checkbox" required value={true} />
          </div>

          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  )
}
