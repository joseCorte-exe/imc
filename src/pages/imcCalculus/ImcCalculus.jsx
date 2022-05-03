import React from 'react'

export default function ImcCalculus() {
  return (
    <main>
        <table class="demo">
          <caption><br/></caption>
          <thead>
            <tr>
              <th><span >IMC</span><br/></th>
              <th><span >Classificação</span><br/></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>abaixo de 18,5</td>
              <td>Baixo peso</td>
            </tr>
            <tr>
              <td>entre 18,6 e 24,9</td>
              <td>Peso Normal</td>
            </tr>
            <tr>
              <td>entre 25 e 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>entre 30 e 34,9</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>entre 35 e 39,9</td>
              <td>Obesidade grau II</td>
            </tr>
            <tr>
              <td>acima de 40</td>
              <td>Obesidade grau III</td>
            </tr>
          </tbody>
        </table>
      <section>
          <label>Digite aqui seu peso</label>
          <input type="number" name="weight" id="weight" />
          <label>Digite aqui sua altura</label>
          <input type="number" name="height" id="height" />
          <label>Seu IMC aparecera aqui</label>
          <button onclick="CalcImc()" >Enviar!</button>
      </section>
    </main>
  )
}
