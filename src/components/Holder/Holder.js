import React from 'react';
import './holder.css';
import Leetcode from "../../assests/Images/leetcode_logo_port2.png";
import linkedin from "../../assests/Images/linkedin.png";
import Github from "../../assests/Images/github.png";

export const Holder = () => {
  return (
    <div className='holder'>
      <ul class="holderbox">
        <li class="linkedin">
        <a className='float' href="https://www.linkedin.com/in/nishanth-reddy-a72036215/"
          target="_blank"
          rel="noreferrer">
            
            <img src={linkedin} alt="" className="clientImgd" />
          </a>
          </li>
        <li class="github">
        <a className='float' href="https://github.com/heisenlord"

          target="_blank"
          rel="noreferrer">
            <img src={Github} alt="" className="clientImgd" />
          </a>
        </li>
        <li class="leetcode">
          <a className='float' href="https://leetcode.com/u/nishanthreddy007/"
          target="_blank"
          rel="noreferrer">
            <img src={Leetcode} alt="" className="clientImgd leet" />
          </a>
        </li>

      </ul>
    </div>
  )

}
