import * as ActionType from "./constants";
import data from '../../booking-tickets/danhSachGhe.json';

const initState = {
    isLoading: false,
    listSeats: data,
    listSeatsSelected: [],
}

const TicketsReducer = (state = initState, action) => {
    /**
     * action: add/update/edit/delete/search
     * action = { type: type, payload: data}
     * {
     *   type: 'DELETE',
     *   payload: 1,
     * }
     * 
     * {
     *   type: 'EDIT',
     *   payload: user,
     * }
     */
    switch (action.type) {
        case ActionType.CONFIRM_BOOKING:
            handleConfirmBooking(state, action.payload);
            return {
                ...state
            };

        case ActionType.DELETE_SEAT_ITEM:
            handleDeleteSeatItem(state, action.payload);
            return {
                ...state
            };
        default:
            return {
                ...state
            };
    };
}

// handle confirm booking
const handleConfirmBooking = (state, arrSeatsSelected) => {
    const listSeatsClone = [...state.listSeats];
    const listSeatsSelectedClone = [...state.listSeatsSelected];

    for (const seatItemSelected of arrSeatsSelected) {
        // find item in listSeats
        const seatItem = (typeof listSeatsClone[seatItemSelected.indexX] !== 'undefined') ? listSeatsClone[seatItemSelected.indexX] : null;
        if (seatItem) {
            const seatingRow = (typeof seatItem['danhSachGhe'][seatItemSelected.indexY] !== 'undefined') ? seatItem['danhSachGhe'][seatItemSelected.indexY] : null;
            if (seatingRow) {
                const data = {
                    'hang': seatItem.hang,
                    'soGhe': seatingRow.soGhe,
                    'gia': seatingRow.gia,
                    'indexX': seatItemSelected.indexX,
                    'indexY': seatItemSelected.indexY
                };
                listSeatsSelectedClone.push(data);

                // set daDat: true
                listSeatsClone[seatItemSelected.indexX]['danhSachGhe'][seatItemSelected.indexY].daDat = true;
            }
        }
    }

    state.listSeats = listSeatsClone;
    state.listSeatsSelected = listSeatsSelectedClone;
};

// handle delete seat item
const handleDeleteSeatItem = (state, seatItemSelected) => {
    const listSeatsClone = [...state.listSeats];
    const listSeatsSelectedClone = [...state.listSeatsSelected];
    
    if (seatItemSelected) { 
        // find item in listSeats
        const seatItem = (typeof listSeatsClone[seatItemSelected.indexX] !== 'undefined') ? listSeatsClone[seatItemSelected.indexX] : null;
        if (seatItem) {
            const seatingRow = (typeof seatItem['danhSachGhe'][seatItemSelected.indexY] !== 'undefined') ? seatItem['danhSachGhe'][seatItemSelected.indexY] : null;
            if (seatingRow) {
                const index = listSeatsSelectedClone.findIndex((item) => item.soGhe === seatingRow.soGhe);
                if (index !== -1) {
                    listSeatsSelectedClone.splice(index, 1);
                }

                // set daDat: false
                listSeatsClone[seatItemSelected.indexX]['danhSachGhe'][seatItemSelected.indexY].daDat = false;
            }
        }

        state.listSeats = listSeatsClone;
        state.listSeatsSelected = listSeatsSelectedClone;
    }
};

export default TicketsReducer;