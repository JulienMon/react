export const CREATE_RENTING = 'CREATE_RENTING';
export const LOAD_RENTING = 'LOAD_RENTING';

function isValidRenting(newRenting, rentings) {
    return rentings.find(item => {
        return (
            item.inventoryId == newRenting.inventory &&
            !(newRenting.start > item.end || newRenting.end < item.start)
        );
    });
}

function addRenting(newRenting) {
    return {
        type: CREATE_RENTING,
        payload: {
            id: Date.now(),
            clientId: parseInt(newRenting.client),
            inventoryId: parseInt(newRenting.inventory),
            start: newRenting.start,
            end: newRenting.end,
            //...newRenting,
        },
    };
}

export function createRenting(newRenting) {
    return (dispatch, getState) => {
        const { rentingState } = getState();

        var existingRenting = isValidRenting(newRenting, rentingState);

        if (typeof existingRenting !== 'undefined')
            window.alert('Déjà réservé.');
        else dispatch(addRenting(newRenting));
    };
}

export function addRentingToState(rentings) {
    return {
        type: CREATE_RENTING,
        payload: rentings,
    };
}

export function loadRenting() {
    return (dispatch, getState) => {
        // const req = new XMLHttpRequest();

        // req.onreadystatechange = function(event) {
        //     if (this.readyState === XMLHttpRequest.DONE) {
        //         if (this.status === 200) {
        //             //console.log('Réponse reçue: %s', this.responseText);
        //             console.log('Réponse reçue');

        //             dispatch(addRentingToState(JSON.parse(this.responseText)))

        //         } else {
        //             console.log(
        //                 'Status de la réponse: %d (%s)',
        //                 this.status,
        //                 this.statusText
        //             );
        //         }
        //     }
        // };

        // req.open('GET', 'http://localhost:5000/renting.json', true);
        // req.send(null);

        fetch('http://localhost:5000/renting.json')
            .then(response => response.json())
            .then(response => {
                console.log('Réponse reçue');
                dispatch(addRentingToState(response));
            });
    };
}
