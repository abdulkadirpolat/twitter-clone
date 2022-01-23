// import firebase from "firebase";
import React, { useState } from "react";
// import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  LocalIcon,
} from "../icons/Icon";


const TweetBox = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  
  const sendTweet = () => {
    if (content !== "") {
      dispatch({
        type: "ADD_TWEET",
        displayName: "abdulkadir polat",
        username: "@abdulkadrplt",
        content,
        timestamp: new Date().toISOString(),
        image:
          "https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif",
        avatar:
        "https://avatars.githubusercontent.com/u/75859682?v=4",
      });
      setContent("");
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <LocalIcon className="w-6 h-6 text-blue-200" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;