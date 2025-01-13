import React from "react";

const SelectedSeats = ({ selectedSeats }) => {
  if (selectedSeats.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Selected Seats:</h3>
      <div className="flex space-x-2">
        {selectedSeats.map((seatId) => (
          <div
            key={seatId}
            className="bg-blue-500 text-white px-2 py-1 rounded-lg"
          >
            {seatId}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedSeats;
