import React, { Component } from "react";
import { connect } from 'react-redux';
import SeatItem from './seat-item';
import { actConfirmBooking } from "./../store/tickets/actions";

class ListSeats extends Component {
  renderListSeats = () => {
    const { listSeats } = this.props;

    return listSeats?.map((seat, indexX) => {
        return (
            <SeatItem key={seat.hang} seat={seat} indexX={indexX} />
        );
    });
  };

  render() {
    return (
        <div className="seatStructure">
            <p id="notification"></p>
            <div className="screen">
                <h2 className="wthree">Màn Hình</h2>
            </div>
            <table id="seatsBlock">
                <tbody>
                    { this.renderListSeats() }
                </tbody>
            </table>
            <hr />
            <button className="btn btnConfirmBooking" onClick={() => { this.props.confirmBooking() }}>Xác nhận Đặt chỗ</button>
            <hr />
        </div>
    );
  }
}

// Lay data tu reducer xuong component chuyen thanh props de su dung
const mapStateToProps = (state) => {
  return {
    // key: value
    listSeats: state.TicketsReducer.listSeats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // key: value
    confirmBooking: () => {
      const arrSeatsSelected = [];
      const checkedBoxes = document.querySelectorAll('input[name=seat]:checked');
      for (let checkedBox of checkedBoxes) {
        const data = {
          indexX: checkedBox.dataset.indexX,
          indexY: checkedBox.dataset.indexY,
        };

        arrSeatsSelected.push(data);
      }

      if (arrSeatsSelected) {
        dispatch(actConfirmBooking(arrSeatsSelected));
        
        // Reset all checked 
        for (let checkedBox of checkedBoxes) {
          checkedBox.checked = false;
        }
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSeats);
