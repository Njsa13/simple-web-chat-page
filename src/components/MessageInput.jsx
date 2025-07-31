import React from "react";
import { Plus, SendHorizontal } from "lucide-react";

function MessageInput() {
  return (
    <div className="p-4 w-full">
      <form className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input type="text" className="w-full input input-bordered rounded-lg input-sm sm:input-md" placeholder="Type a message..." />
          <button type="button" className=" btn btn-circle">
            <Plus size={20} />
          </button>
        </div>
        <button type="submit" className="btn btn-circle">
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
