import React from "react";

const SeatGrid = ({ seats, onSeatClick }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {seats.map((seat) => (
        <div
          key={seat.id}
          className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer ${
            seat.isBooked
              ? "bg-red-500 text-white"
              : seat.isSelected
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => !seat.isBooked && onSeatClick(seat.id)}
        >
          {seat.id}
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
