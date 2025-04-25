import React from 'react'
import Busca from './components/Busca'
import LocalidadeLista from './components/LocalidadeLista'
import Grafico from './components/Grafico'
 class App extends React.Component {
  state = {
    buscaCep: null,
    historico: []
}
   onBuscaRealizada = (dados) => {
     this.setState((prevState) =>({ buscaCep: dados,
     historico: [dados, ...prevState.historico]}))
   }
   render(){
     return ( 
       <div className='grid justify-content-center'>
           <div className="col-12" style={{}}>
             <Busca
               onBuscaRealizada={this.onBuscaRealizada}/>
           </div>
           <div className="col-12">
           <LocalidadeLista dados={this.state.buscaCep} />
           </div>
           <div className="col-12" style={{marginLeft: '1200px'}}>
           <Grafico historico={this.state.historico} />
           </div>
       </div>
     )
   }
 }
export default App

