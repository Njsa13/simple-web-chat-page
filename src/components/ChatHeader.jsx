import React from "react";

function ChatHeader(props) {
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={props.roomInfo.image_url} />
            </div>
          </div>
          <div>
            <h3 className="font-medium">{props.roomInfo.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
