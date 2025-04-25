import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class Grafico extends Component {
  contarEstados(consultas) {
    const contagem = {};
    consultas.forEach(item => {
      if (item.uf) {
        contagem[item.uf] = (contagem[item.uf] || 0) + 1;
      }
    });
    return contagem;
  }

  prepararDados(contagem) {
    const labels = Object.keys(contagem);
    const data = Object.values(contagem);

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            'blue', 'red', 'pink', 'green', 'purple']
        }
      ]
    };
  }

  render() {
    const contagem = this.contarEstados(this.props.historico);
    const dadosGrafico = this.prepararDados(contagem);

    return (
      <div className="flex justify-content-center mt-5">
        <div style={{ width: '400px' }}>
          <h1 style={{ textAlign: 'center', color: 'black' }}></h1>
          <Chart type="pie" data={dadosGrafico} />
        </div>
      </div>
    );
  }
}
