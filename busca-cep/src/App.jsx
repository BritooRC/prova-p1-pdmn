import React from 'react'
import Busca from './components/Busca'
import LocalidadeLista from './components/LocalidadeLista'
 class App extends React.Component {
  state = {
    buscaCep: null
}
   onBuscaRealizada = (dados) => {
     this.setState({ buscaCep: dados})
   } 
   render(){
     return (
       <div className='grid justify-content-center'>
           <div className="col-12">
             <Busca
               onBuscaRealizada={this.onBuscaRealizada}/>
           </div>
           <div className="col-12">
           <LocalidadeLista dados={this.state.buscaCep} />
           </div>
       </div>
     )
   }
 }
export default App

