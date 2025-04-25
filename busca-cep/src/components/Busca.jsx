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
        this.setState({ termoDeBusca: event.target.value })
    }
    onFormSubmit = async (event) => {
        event.preventDefault()
        const { termoDeBusca } = this.state
        if (!termoDeBusca || termoDeBusca.length !== 8 || isNaN(termoDeBusca)) {
            alert('Por favor, digite um CEP válido com 8 dígitos numéricos.')
            return
        }
        try {
            const viacep = await axios.get(`https://viacep.com.br/ws/${termoDeBusca}/json/`)
            const data = viacep.data
            if (data.erro) {
                alert('Não existe esse CEP.')
                return
            }
            this.props.onBuscaRealizada(data)
            this.setState({ termoDeBusca: '' })
            console.log(data)
        } catch (error) {
            alert('Erro ao buscar o CEP. Verifique sua conexão.')
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
                            style={{ borderRadius: '10px', borderColor: 'blue', borderWidth: '1px', borderStyle: 'solid', fontSize: '30px', padding: '10px', textAlign: 'center', width: '400px' }}
                            placeholder={this.props.dica}
                            maxLength={8}
                            onChange={this.onTermoAlterado}
                            value={this.state.termoDeBusca} />
                    </IconField>
                    <br />
                    <Button
                        style={{ backgroundColor: 'white', color: 'blue', borderColor: 'blue', borderWidth: '1px', borderStyle: 'solid', borderRadius: '15px', padding: '8px 16px', fontSize: '100%', width: '400px' }}
                        label="OK"
                        outlined />
                </div>
            </form>
        )
    }
}
Busca.defaultProps = {
    dica: 'Digite um CEP sem o "-"'
}