// import { useState } from "react";
import "./chatList.css";

const chatList = () => {
  // const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBox">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="search"></input>
        </div>
        <img
        // src={addMode ? "./minus.png" : "./plus.png"}
        // alt=""
        // className="add"
        // onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>varsha</span>
          <p>hiii</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>varsha</span>
          <p>hiii</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>varsha</span>
          <p>hiii</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>varsha</span>
          <p>hiii</p>
        </div>
      </div>
    </div>
  );
};

export default chatList;
