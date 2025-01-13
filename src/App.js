import React from "react";
import MainPage from "./Components/MainPage";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4 text-center font-semibold">
        Movie Booking System
      </header>
      <main className="p-6">
        <MainPage />
      </main>
    </div>
  );
};

export default App;
