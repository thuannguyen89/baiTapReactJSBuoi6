import React, { Component } from "react";

export default class SeatItem extends Component {
    renderSeatItemHeader = (seats) => {
        return seats.map((seat) => {
            return (
                <td key={ seat.soGhe } className="rowNumber">{ seat.soGhe }</td>
            );
        });
    }

    renderSeatItemBody = (seats, indexX) => {
        return seats.map((seat, indexY) => {
            return (
                <td key={ seat.soGhe } className="seatItem">
                    <label className="seatItem">
                        <input name="seat" type="checkbox" className="seat" value={ seat.soGhe } disabled={seat.daDat === true ? 'disabled' : ''} data-index-x={indexX} data-index-y={indexY}></input>
                        <span className={seat.daDat === true ? 'checkmark seatSelected' : 'checkmark'}></span>
                    </label>
                </td>
            );
        });
    }

    render() {
        const { seat, indexX } = this.props;
        if (seat.hang === '') {
            return (
                <tr>
                    <td></td>
                    { this.renderSeatItemHeader(seat.danhSachGhe) }
                </tr>
            );
        } else {
            return (
                <tr>
                    <td className="rowNumber">{ seat.hang }</td>
                    { this.renderSeatItemBody(seat.danhSachGhe, indexX) }
                </tr>
            );
        }
    }
}
