import React, { Component } from 'react'
import {Card} from 'primereact/card'
export default class LocalidadeLista extends Component {
  state = {
    buscaCep: []
}
componentDidUpdate(prevProps) {
  if (this.props.dados && this.props.dados !== prevProps.dados) {
    this.setState((prevState) => ({
      
      buscaCep: [this.props.dados, ...prevState.buscaCep]
    }))
  }
}
      render() {
        const {buscaCep} = this.state
        return (
          <div className="card-div" style={{ width: '300px', height: '150px' }}>
            <br />
            {buscaCep.map((item, index) => (
              
              <Card key={index} style={{ backgroundColor: 'white',color: 'blue',borderColor:'blue', borderWidth: '1px',borderStyle: 'solid',borderRadius: '15px',padding: '8px 16px',fontSize: '100%',width: '400px', textAlign:'center',  marginBottom: '20px'}}>
                <div className="card-text">
                  <p>{item.cep}</p>
                  <p>{item.logradouro}</p>
                  <p>{item.bairro}</p>
                  <p>{item.localidade} - {item.uf}</p>
                </div>
               
              </Card>
            ))}
          </div>
        );
      }
    }