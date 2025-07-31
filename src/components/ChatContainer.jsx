import React from "react";
import { FileText } from 'lucide-react';

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { getFileNameFromUrl } from "../utils/utils";

function ChatContainer(props) {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader roomInfo={props.selectedRoom.room} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {props.selectedRoom.comments.map((comment) => (
          <div className="chat chat-start" key={comment.id}>
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img src="/avatar.png" alt="profile pic" />
              </div>
            </div>
            <div className="chat-header mb-1">
              <p>{props.selectedRoom.room.participant.find((val) => comment.sender === val.id).name}</p>
            </div>
            <div className="chat-bubble flex flex-col">
              {comment.type === "text" && <p>{comment.message}</p>}
              {comment.type === "image" && <img src={comment.message} alt="Attachment" className="sm:max-w-[200px] rounded-md mb-2" />}
              {comment.type === "video" && (
                <video controls className="sm:max-w-[300px] rounded-lg shadow-md border border-gray-300">
                  <source src={comment.message} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {comment.type === "pdf" && (
                <div className="card card-side sm:max-w-[320px] bg-base-200 card-sm shadow-sm">
                  <div className="flex items-center ml-4"><FileText size={25} /></div>
                  <div className="card-body">
                    <h2 className="card-title">{getFileNameFromUrl(comment.message)}</h2>
                    <a href={comment.message} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">View PDF</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
}

export default ChatContainer;
