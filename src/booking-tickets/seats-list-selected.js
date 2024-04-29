import React, { Component } from "react";
import { connect } from 'react-redux';
import SeatItemSelected from './seat-item-selected';

class ListSeatsSelected extends Component {
  renderListSeatsSelected = () => {
    const { listSeatsSelected } = this.props;

    return listSeatsSelected?.map((seat) => {
        return (
            <SeatItemSelected key={seat.soGhe} seat={seat} />
        );
    });
  };

  render() {
    return (
        <div className="seatStructureSelected">
            <h2 className="wthree">DSách Ghế Bạn Chọn</h2>
            <ul>
              <li><span className="checkmark checkmarkSelected"></span>Ghế đã đặt</li>
              <li><span className="checkmark checkmarkSelecting"></span>Ghế đang chọn</li>
              <li><span className="checkmark"></span>Ghế chưa đặt</li>
            </ul>

            <div style={{height: "345px", overflow: "auto"}}>
              <table id="seatsSelectedBlock">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                  <tbody>
                      { this.renderListSeatsSelected() }
                  </tbody>
              </table>
            </div>
        </div>
    );
  }
}

// Lay data tu reducer xuong component chuyen thanh props de su dung
const mapStateToProps = (state) => {
  return {
    // key: value
    listSeatsSelected: state.TicketsReducer.listSeatsSelected,
  }
}

export default connect(mapStateToProps, null)(ListSeatsSelected);
