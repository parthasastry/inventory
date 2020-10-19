import React, { Component } from 'react'
import axios from "axios";

const config = require('./config.json');

export class App extends Component {

    state = {
        inventory: []
    }

    fetchInventory = async () => {
        try {
            const res = await axios.get(`${config.api.invokeUrl}/inventory`);
            console.log(res)
            this.setState({ inventory: res.data })
          } catch(err) {
            console.log("Error: ", err)
          }
    }

    componentDidMount() {
        this.fetchInventory();
    }

    render() {
        const renderedData = this.state.inventory.map((data, index) => {
            return (
                <div key={index}>
                    Server: {data.server_name} 
                    Application: {data.app_name}
                </div>)
        })
        return (
            <div>
                App
                {renderedData}
            </div>
        )
    }
}

export default App
