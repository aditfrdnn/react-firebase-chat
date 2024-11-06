import "./detail.css";

const Detail = () => {
  return (

//User Detail//
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Software Engineer - Product Development and Implementation</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
            <div className="title">
              <span>Shared Photos & Document</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                <img src="parfume.jpg" alt="" />
                <span>parfume_sell2024</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
            </div>
          </div>

          <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                <img src="parfume.jpg" alt="" />
                <span>parfume_sell2024</span>
                </div>
                <img src="./download.png" alt=""
                className="icon" />
              </div>
            </div>

            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                <img src="parfume.jpg" alt="" />
                <span>parfume_sell2024</span>
                </div>
                <img src="./download.png" alt=""
                className="icon" />
              </div>
            </div>
      </div>

        <div className="info">
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="dropdown" />
            </div>
          </div>
          <button>Block User</button>
          <button className="logOut">Log Out</button>
        </div>
      
    </div>
  )
}

export default Detail