import type { User } from "./UserList";
import { useState, useEffect } from "react";
import "./App.css";

import TimePicker from "./TimePicker";
function App() {
  return (
    <div className="App">
      <TimePicker />
    </div>
  );
}

export default App;
