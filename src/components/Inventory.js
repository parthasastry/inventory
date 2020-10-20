import React, { Component } from 'react';
import axios from "axios";

const config = require('../config.json');

export class Inventory extends Component {
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
        const tableHead = <thead>
            <tr>
                <th>Server Name</th>
                <th>Application Name</th>
                <th>Environment</th>
                <th>Operating System</th>
                <th>Server Type</th>
                <th>Migration Date</th>
                <th>Move Group</th>
            </tr>
        </thead>

        
        const renderedData = this.state.inventory.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.server_name}</td>
                    <td>{data.app_name}</td>
                    <td>{data.environment}</td>
                    <td>{data.server_os}</td>
                    <td>{data.server_type}</td>
                    <td>{data.cutover_date}</td>
                    <td>{data.move_group}</td>
                </tr>
                )
        })

        return (
            <div className="container">
                <table className="table is-bordered">
                    {tableHead}
                    <tbody>{renderedData}</tbody>
                </table>
            </div>
            
        )
    }
}

export default Inventory
