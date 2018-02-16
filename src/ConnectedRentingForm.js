import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { createRenting } from './rentingActions';

class RentingForm extends Component {
    state = {
        client: '',
        inventory: '',
        start: '',
        end: '',
    };

    onChange = e => {
        const { value, id } = e.target;

        this.setState(() => {
            return {
                [id]: value,
            };
        });
    };

    isDisabled() {
        return !this.state.client || !this.state.inventory;
    }

    render() {
        const { dispatch } = this.props;
        return (
            <Fragment>
                <label htmlFor="client">Client</label>
                <select
                    id="client"
                    onChange={this.onChange}
                    value={this.state.client}
                >
                    <option />
                    {this.props.clients.map(client => (
                        <option key={client.id} value={client.id}>
                            {client.name}
                        </option>
                    ))}
                </select>
                <br />
                <label htmlFor="inventory">Model</label>
                <select
                    id="inventory"
                    onChange={this.onChange}
                    value={this.state.inventory}
                >
                    <option />
                    {this.props.inventory.map(inventory => (
                        <option key={inventory.id} value={inventory.id}>
                            {inventory.label}
                        </option>
                    ))}
                </select>
                <br />
                <label htmlFor="start">Start Date</label>
                <input
                    id="start"
                    type="date"
                    onChange={this.onChange}
                    value={this.state.start}
                    max={this.state.end}
                />
                <br />
                <label htmlFor="end">End Date</label>
                <input
                    id="end"
                    type="date"
                    onChange={this.onChange}
                    value={this.state.end}
                    min={this.state.start}
                    disabled={!this.state.start}
                />
                <br />
                <button
                    disabled={this.isDisabled()}
                    onClick={() => dispatch(createRenting(this.state))}
                >
                    Add
                </button>
            </Fragment>
        );
    }
}

function mapStateToProp(applicationState) {
    return {
        clients: applicationState.clientState,
        inventory: applicationState.inventoryState,
    };
}

const ConnectedRentingForm = connect(mapStateToProp)(RentingForm);

export default ConnectedRentingForm;
