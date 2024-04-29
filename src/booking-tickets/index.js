import React, { Component } from "react";
import ListSeats from "./seats-list";
import ListSeatsSelected from "./seats-list-selected";

export default class BookingTickets extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Đặt Vé Xem Phim CyberLearn.VN</h1>
        <div className="row">
          <div className="col-md-8">
            <ListSeats />
          </div>

          <div className="col-md-4">
            {/* <h2 className="display-4 text-center">Danh Sách Ghế Bạn Chọn</h2> */}
            <ListSeatsSelected />
          </div>
        </div>
      </div>
    );
  }
}
