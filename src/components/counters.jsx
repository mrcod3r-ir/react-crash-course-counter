import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 55 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleDelete = (counterId) => {
        // console.log('handle delete', counterId);
        const counters = this.state.counters.filter(item => item.id !== counterId)
        // this.setState({ counters: counters })
        this.setState({ counters })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.counters.map(
                    counter =>
                        <Counter onDelete={this.handleDelete} key={counter.id} counter={counter} />
                )}
            </React.Fragment>
        );
    }
}

export default Counters;