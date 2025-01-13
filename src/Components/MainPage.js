import React, { useState, useEffect } from "react";
import SeatGrid from "./SeatGrid";
import SelectedSeats from "./SelectedSeats";
import Button from "./ui/Button";

const MainPage = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Initialize 40 static seats
  useEffect(() => {
    const initialSeats = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      isBooked: false,
      isSelected: false,
    }));
    setSeats(initialSeats);
  }, []);

  const toggleSeatSelection = (seatId) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((id) => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const confirmBooking = () => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        selectedSeats.includes(seat.id)
          ? { ...seat, isBooked: true, isSelected: false }
          : seat
      )
    );
    setSelectedSeats([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Movie Booking System</h1>
        <Button
          onClick={confirmBooking}
          disabled={selectedSeats.length === 0}
          variant="secondary"
        >
          Confirm Booking
        </Button>
      </div>

      {/* Seat Grid */}
      <SeatGrid seats={seats} onSeatClick={toggleSeatSelection} />

      {/* Selected Seats Section */}
      <SelectedSeats selectedSeats={selectedSeats} />

      {/* Booked Seats Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Booked Seats</h3>
        <div className="grid grid-cols-5 gap-2">
          {seats
            .filter((seat) => seat.isBooked)
            .map((seat) => (
              <div
                key={seat.id}
                className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center"
              >
                {seat.id}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
