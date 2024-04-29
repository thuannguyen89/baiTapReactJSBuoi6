import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteSeatItem } from "./../store/tickets/actions";

class SeatItemSelected extends Component {
    render() {
        const { seat } = this.props;
        return (
            <tr key={seat.soGhe}>
                <td>{seat.soGhe}</td>
                <td>{seat.gia}</td>
                <td><button className="btn btn-danger" onClick={() => { this.props.deleteSeatItem(seat.indexX, seat.indexY) }}>Hủy</button></td>
            </tr>
        );
    }
}

// Gui action len UserReducer
const mapDispatchToProps = (dispatch) => {
  return {
    // key: value
    deleteSeatItem: (indexX, indexY) => {
      dispatch(actDeleteSeatItem({ 'indexX': indexX, 'indexY': indexY }));
    }
  }
}

export default connect(null, mapDispatchToProps) (SeatItemSelected);
