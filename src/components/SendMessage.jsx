import EmojiPicker from "emoji-picker-react";
import React, { useState, useRef } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const SendMessage = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const onEmojiClick = (emojiData, event) => {
    const emoji = emojiData.emoji || emojiData.native;
    if (emoji) {
      insertTextAtCursor(inputRef.current, emoji);
      setOpenEmoji(false);
    }
  };

  const handleOpenEmoji = () => {
    setOpenEmoji(!openEmoji);
  };

  const insertTextAtCursor = (input, text) => {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const newValue =
      input.value.substring(0, start) + text + input.value.substring(end);
    setInputValue(newValue);

    // Move the cursor to the end of the inserted emoji
    requestAnimationFrame(() => {
      input.selectionStart = input.selectionEnd = start + text.length;
    });
  };

  return (
    <div className="">
      <div className="container fixed bottom-0 w-full py-10 shadow-lg">
        <form className="px-1 containerWrap flex">
          <div className="px-2 w-auto py-2 cursor-pointer">
            <MdOutlineEmojiEmotions
              onClick={handleOpenEmoji}
              size={30}
              className="text-black/60 dark:text-white/80 hover:text-gray-600"
            />
          </div>
          <input
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message"
          />
          <button
            type="submit"
            className="w-auto bg-gray-500 text-white rounded-r-full px-5 text-sm"
          >
            <RiSendPlaneFill size={20} />
          </button>
        </form>
      </div>

      {openEmoji && (
        <EmojiPicker className="bottom-5" onEmojiClick={onEmojiClick} />
      )}
    </div>
  );
};

export default SendMessage;
