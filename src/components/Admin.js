import React, { Component } from 'react';
import axios from 'axios';

const config = require('../config.json');

export class Admin extends Component {
    state = {
        servername: '',
        appname: '',
        environment: '',
        os: '',
        servertype: '',
        cutoverdate: '',
        movegroup: ''
    }

    postInventory = async () => {
        const params = {
            servername: this.state.servername,
            appname: this.state.appname, 
            cutoverdate: this.state.cutoverdate, 
            environment: this.state.environment, 
            movegroup: this.state.movegroup, 
            serveros: this.state.os, 
            servertype: this.state.servertype
        };

        try {
            const res = await axios.post(`${config.api.invokeUrl}/inventory`, params);
            console.log("After posting: ", res);
            this.setState({
                servername: '',
                appname: '',
                environment: '',
                os: '',
                servertype: '',
                cutoverdate: '',
                movegroup: ''
            })
          } catch(err) {
            console.log("Error: ", err)
          }
    }


    onInputChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.postInventory();
        this.props.history.push("/inventory");
    }

    render() {
        return (
            <div className="container">
                <h1>Please enter Configuration Items</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Server Name</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text"
                                placeholder="Server"
                                id="servername"
                                value={this.state.servername}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Application Name</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text"
                                placeholder="Application"
                                id="appname"
                                value={this.state.appname}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Environment</label>
                        <div className="control">
                            <div className="select">
                                <select 
                                    id="environment"
                                    value={this.state.environment}
                                    onChange={this.onInputChange}
                                >
                                    <option>DEV</option>
                                    <option>QA</option>
                                    <option>PERF</option>
                                    <option>PRE-PROD</option>
                                    <option>PROD</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Operating System</label>
                        <div className="control">
                            <div className="select">
                                <select 
                                    id="os"
                                    value={this.state.os}
                                    onChange={this.onInputChange}
                                >
                                    <option>Linux</option>
                                    <option>Windows 2012</option>
                                    <option>Windows 2016</option>
                                    <option>Windows 2019</option>
                                    <option>CentOS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Server Type</label>
                        <div className="control">
                            <div className="select">
                                <select 
                                    id="servertype"
                                    value={this.state.servertype}
                                    onChange={this.onInputChange}
                                >
                                    <option>Web Server</option>
                                    <option>Database Server</option>
                                    <option>Application Server</option>
                                    <option>Mail Server</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Migration Date</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="date"
                                placeholder="Cutover Date"
                                id="cutoverdate"
                                value={this.state.cutoverdate}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Move Group</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text"
                                placeholder="Move Group"
                                id="movegroup"
                                value={this.state.movegroup}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                    <div className="control">
                            <button className="button is-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Admin
