import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <div className="para">
            <p>Earning rewards</p>
            <p>has never been</p>
            <p>so easy</p>
          </div>

          <div className="dow-img">
            <span>
              <img className="img1" src="./image/Frame 325.png" alt="" />
            </span>
            <span>
              <img className="img2" src="./image/Frame 326 (1).png" alt="" />
            </span>
          </div>
        </div>
        <div className="header-right">
          <img className="img3" src="./image/iPhone 12 Pro Max.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header