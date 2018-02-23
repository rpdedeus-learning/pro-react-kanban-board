import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application:json',
    Authorization: 'This application is a special snow flake and there is no other like it'
};

class KanbanBoardContainer extends Component {

    constructor() {

        super(...arguments)
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch(API_URL+'/cards/', {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards: responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }

    addTask(cardId, taskName) {
        console.log('added!!!');
    }

    deleteTask(cardId, taskId, taskIndex) {
        console.log('deleted!!!');
    }

    toggleTask(cardId, taskId, taskIndex) {
        console.log('toggled!!!');
    }
 
    render() {

        return (
            <KanbanBoard cards={this.state.cards} 
                taskCallbacks={{
                    toggle: this.toggleTask.bind(this),
                    delete: this.deleteTask.bind(this),
                    add: this.addTask.bind(this)
                }} 
            />
        )
    }

}

export default KanbanBoardContainer;