import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";


const Chat = () => {
  const [open, setOpen]=useState(false);
  const [text, setText]=useState("");

  const handleEmoji = (e) => {
    setText((prev)=> prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Last active a few minutes ago</p>
          </div>
        </div>
        <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
      </div>
      <div className="center">
        <div className="message own">
              <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate nunc a magna fermentum, nec laoreet orci pellentesque. Ut quis semper nisl, ac elementum eros. Aliquam erat volutpat. Vestibulum faucibus justo nec lacinia pretium. Integer a ex mauris. Fusce ac suscipit erat. Vivamus fringilla, nunc at cursus pulvinar, sapien felis venenatis sem, a convallis nunc nunc nec dui.t</p>
                <span>1 minute ago</span>
              </div>
        </div>
        <div className="message">
        <img src="./avatar.png" alt="" />
              <div className="texts">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate nunc a magna fermentum, nec laoreet orci pellentesque. Ut quis semper nisl, ac elementum eros. Aliquam erat volutpat. Vestibulum faucibus justo nec lacinia pretium. Integer a ex mauris. Fusce ac suscipit erat. Vivamus fringilla, nunc at cursus pulvinar, sapien felis venenatis sem, a convallis nunc nunc nec dui.</p>
                <span>1 minute ago</span>
              </div>
        </div>
        <div className="message own">
              <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate nunc a magna fermentum, nec laoreet orci pellentesque. Ut quis semper nisl, ac elementum eros. Aliquam erat volutpat. Vestibulum faucibus justo nec lacinia pretium. Integer a ex mauris. Fusce ac suscipit erat. Vivamus fringilla, nunc at cursus pulvinar, sapien felis venenatis sem, a convallis nunc nunc nec dui.</p>
                <span>1 minute ago</span>
              </div>
        </div>
        <div className="message">
        <img src="./avatar.png" alt="" />
              <div className="texts">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate nunc a magna fermentum, nec laoreet orci pellentesque. Ut quis semper nisl, ac elementum eros. Aliquam erat volutpat. Vestibulum faucibus justo nec lacinia pretium. Integer a ex mauris. Fusce ac suscipit erat. Vivamus fringilla, nunc at cursus pulvinar, sapien felis venenatis sem, a convallis nunc nunc nec dui.</p>
                <span>1 minute ago</span>
              </div>
        </div>
        <div className="message own">
              <div className="text">
              <img src="./parfume.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate nunc a magna fermentum, nec laoreet orci pellentesque. Ut quis semper nisl, ac elementum eros. Aliquam erat volutpat. Vestibulum faucibus justo nec lacinia pretium. Integer a ex mauris. Fusce ac suscipit erat. Vivamus fringilla, nunc at cursus pulvinar, sapien felis venenatis sem, a convallis nunc nunc nec dui.</p>
                <span>1 minute ago</span>
              </div>
        </div>

      </div>
      <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="/camera.png" alt="" />
            <img src="/mic.png" alt="" />
          </div>
          <input type="text" placeholder="Type a message..." value={text} onChange={e=>setText(e.target.value)}/>
          <div className="emoji">
            <img 
            src="./emoji.png" 
            alt=""
            onClick={() => setOpen((prev)=>!prev)}/>
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
            </div>
          <button className="sendButton">Send</button>
        </div>
        
    </div>
  )
}

export default Chat