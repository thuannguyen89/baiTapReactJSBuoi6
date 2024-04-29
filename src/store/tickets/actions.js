import * as ActionType from "./constants";

const actConfirmBooking = (arrSeatsSelected) => {
    return {
        type: ActionType.CONFIRM_BOOKING,
        payload: arrSeatsSelected
    };
}

const actDeleteSeatItem = (seatSelected) => {
    return {
        type: ActionType.DELETE_SEAT_ITEM,
        payload: seatSelected
    };
}

export { actConfirmBooking, actDeleteSeatItem };