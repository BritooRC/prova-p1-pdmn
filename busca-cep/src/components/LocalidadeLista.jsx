import React, { Component } from 'react'
import {Card} from 'primereact/card'

export default class LocalidadeLista extends Component {
    card = {
        cep: '',
        rua: '',
        bairro: '',
        localidade: '',
        estado: ''
      }
    
      listaCards = [
        {
          cep: '04094050',
          rua: 'Avenida Pedro Álvares Cabral',
          bairro: 'Parque Ibirapuera',
          localidade: 'São Paulo',
          estado: 'SP'
        },
        {
          cep: '55592970',
          rua: 'Rua dos Navegantes',
          bairro: 'Vila de Porto de Galinhas',
          localidade: 'Ipojuca',
          estado: 'PE'
        }
      ]
    
      render() {
        return (
          <div className="card-div" style={{ width: '300px', height: '150px' }}>
            {this.listaCards.map((item, index) => (
              <Card key={index} title={item.cep} style={{ margin: '50px' }}>
                <div className="card-text">
                  <p>{item.rua}</p>
                  <p>{item.bairro}</p>
                  <p>{item.localidade} - {item.estado}</p>
                </div>
              </Card>
            ))}
          </div>
        );
      }
    }