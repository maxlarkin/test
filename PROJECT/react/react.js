import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        people: []
    };
    componentDidMount() {
        axios.get(`${axios.defaults.baseURL}/people`)
            .then(res => {
                const people= res.data;
                this.setState({ people});
            })
    }

    render() {
        return (
            <ol>
                { this.state.people.map(person => <li>{person.name}</li>)}
            </ol>
        )
    }
}