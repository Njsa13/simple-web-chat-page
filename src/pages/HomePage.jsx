import React, { useState } from "react";

import Sidebar from "../components/Sidebar.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import { data } from "../constant/index.js";

function HomePage() {
  const [selectedRoom, setSelectedRoom] = useState("");

  const selectRoomHandler = (userId) => {
    setSelectedRoom(userId);
    console.log(selectedRoom);
  };

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-16">
        <div className="bg-base-100 rounded-lg shadow-cl w-full h-[calc(100vh-4rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar rooms={data.map((val) => val.room)} selectRoomHandler={selectRoomHandler} />
            {!selectedRoom ? <NoChatSelected /> : <ChatContainer selectedRoom={data.find((val) => val.room.id === selectedRoom)} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
