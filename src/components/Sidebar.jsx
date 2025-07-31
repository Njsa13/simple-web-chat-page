import React from "react";

function Sidebar(props) {
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      {props.rooms.length > 0 ? (
        props.rooms.map((room) => (
          <div className="overflow-y-auto w-full pb-3" key={room.id}>
            <button onClick={() => props.selectRoomHandler(room.id)} className="w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors bg-base-300 ring-1 ring-base-300">
              <div className="relative mx-auto lg:mx-0">
                <img src={room.image_url} alt="your name" className="size-12 object-cover rounded-full" />
              </div>

              {/* User info - only visible on larger screens */}
              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">{room.name}</div>
              </div>
            </button>
          </div>
        ))
      ) : (
        <div className="text-center text-zinc-500 py-4">You have no friends</div>
      )}
    </aside>
  );
}

export default Sidebar;
