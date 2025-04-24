import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        this.setState({termoDeBusca: event.target.value})
        
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        const { termoDeBusca} = this.state
        if (!termoDeBusca || termoDeBusca.length !== 8 || isNaN(termoDeBusca)) {
            alert('Por favor, digite um CEP válido com 8 dígitos numéricos.')
            return
        }

        try {
            const viacep = await axios.get(`https://viacep.com.br/ws/${termoDeBusca}/json/`)
            const data = viacep.data

            if (data.erro) {
                alert('CEP não encontrado.')
                return
            }

            console.log(data)
        } catch (error) {
            alert('Erro ao buscar o CEP. Verifique sua conexão ou tente novamente mais tarde.')
        }
    }

    render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <div
                className='flex flex-column'>
                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search'></InputIcon>
                        <InputText  
                            className='w-full'
                            placeholder={this.props.dica}
                            maxLength={8}
                            onChange={this.onTermoAlterado}
                            value={this.state.termoDeBusca}/>
                    </IconField>
                    <Button 
                        label="OK"
                        outlined/>
            </div>
        </form>
    )
    }
}

Busca.defaultProps = {
    dica: 'Digite um CEP sem o "-"'
}