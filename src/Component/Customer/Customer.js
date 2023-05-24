import React from 'react'
import "./Customer.css"

const Customer = () => {
  return (
    <div>
         <div className="customer">
        <div className="cus-header">
        <p>How it works</p>
        <h3>What our customers</h3>
        <h3>say about us ?</h3>
        </div>
       
        <div className="works">
          <div className="">
            <img src="./image/conifer-1106.png" alt="" />
            <h4>Track your <span style={{color:'#A5A6F6'}}>savings</span></h4>
            <p>Track your savings and</p>
            <p>build better spending</p>
            <p>habits</p>
          </div>
          <div> 
            <img src="./image/conifer-list-of-achievements.png" alt="" />
            <h4>Accomplish your <span style={{color:'#A5A6F6'}}>goals</span></h4>
            <p>Accomplish your savings</p>
            <p>goals</p>
          </div>
          <div>
            <img src="./image/conifer-1079.png" alt="" />
            <h4>Redeem <span style={{color:'#A5A6F6'}}>rewards</span></h4>
            <p>Redeem rewards when you</p>
            <p>accomplish your savings</p>
            <p>goals.</p>
          </div>
        </div>
        <div className="response">
          <p>WHAT THEY SAY</p>
          <h3>What our customers</h3>
          <h3>says about us ?</h3>
        </div>
      </div>
    </div>
  )
}

export default Customer