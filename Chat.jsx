import "./chat.css";
// import { useState } from "react";
// import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  // const [open, setOpen] = useState(false);
  // const [text, setText] = useState("");
  // const handleEmoji = (e) => {
  //   setText((prev) => prev + e.emoji);
  //   setOpen(false);
  // };
  // console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>difa</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
              ipsa sequi! Quasi laudantium nulla delectus adipisci, minus, sequi
            </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a Message...."
          // value={text}
          // onChange={(e) => setText(e.target.value)}
        ></input>
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            // onclick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            {/* <EmojiPicker open={open} onEmojiClick={handleEmoji} /> */}
          </div>
        </div>
        <button className="sendButton">send</button>
      </div>
    </div>
  );
};

export default Chat;
