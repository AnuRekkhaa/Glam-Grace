import React from 'react'
import './Inter.css'
import inter1 from '../assets/interbrand1.jfif'
import inter2 from '../assets/interbrand2.jfif'
import inter3 from '../assets/interbrand3.jfif'

const Inter = () => {
    return (
        <div className="inter-container">
          <h2>International Brands</h2>
          <p>Explore more for the top International Brands!</p>
          <div className='inter-item-list'>
            <div className="inter-item">
                <img src={inter1} />
                <p>CAUDALIE</p>
            </div>
            <div className="inter-item">
                <img src={inter2} />
                <p>PRAKTI</p>
            </div>
            <div className="inter-item">
                <img src={inter3} />
                <p>JUICE BEAUTY</p>
            </div>
            </div>
            <div className='inter'>
                <button>Explore More</button>
            </div>
        </div>
      );
}

export default Inter
