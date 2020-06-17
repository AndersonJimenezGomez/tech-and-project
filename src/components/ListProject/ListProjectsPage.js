import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class ListProjectPage extends Component {

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    client: 'proteccion',
                    project: 'Doble Asesoria',
                    observations: ' it is a very complex project'
                },
                {
                    client: 'Grupo exito',
                    project: 'self check-out!',
                    observation: 'it was a very big project'
                }
            ],
        }
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Project</th>
                            <th>Observations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(element=>(
                            <tr>
                                <td>{element.client}</td>
                                <td>{element.project}</td>
                                <td>{element.observation}</td>
                            </tr>))}

                    </tbody>
                </Table>
            </div>
        );
    }
}