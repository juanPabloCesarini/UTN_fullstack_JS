import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre : "Heladera PATRICK",
            descripcion : "Heladera con freezer y fábrica de hielo, capacidad 20 lts",
            precio : 65000,
            sku : "15550006568522264",
            stock : 5
        }
    }
    render() {
        return (
            <>
                <div>
                    <ul>
                        <li>{ this.state.nombre}</li>
                        <li>{ this.state.descripcion}</li>
                        <li>$ { this.state.precio}</li>
                        <li>{ this.state.sku}</li>
                        <li>{ this.state.stock}</li>
                    </ul>
                </div>
            </>
        );
    }
}
