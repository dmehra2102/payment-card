import React from 'react';
import "./Apple.css";

function AmazonCard({date,logo,heading,subheading,devices,color}) {
  return (
    <div className='apple' style={{
        'backgroundColor': color
    }}>
        <div className='logo-div'>
            <div className='date'>{date}</div>
            <div>
                <img style={{'width' : "40%" ,"margin" : "10px"}} src={logo} alt={heading} />
            </div>
        </div>
        <div>
         <p className='case-stu'>Case Study</p>
         <p className="heading">{heading}</p>
         <p className="sub-heading">{subheading}</p>
        </div>
        <div className='arrow-div'>
            <div>
              <p className='device'>Device - {devices}</p>
            </div>
            <div>
                <p className='arrow-sign'>→</p>
            </div>
        </div>
    </div>
  )
}

export default AmazonCard