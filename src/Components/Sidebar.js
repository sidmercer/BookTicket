import React from "react";

const Sidebar = ({ selectedSeats }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 fixed right-0 top-0 h-full shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Selected Seats</h3>
      {selectedSeats.length === 0 ? (
        <p>No seats selected</p>
      ) : (
        <ul className="space-y-2">
          {selectedSeats.map((seatId) => (
            <li key={seatId} className="bg-blue-500 text-white p-2 rounded-lg">
              Seat {seatId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
