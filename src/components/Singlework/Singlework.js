import React from 'react';
import './Singlework.css'

const Singlework = (props) => {
    const { sactivity, time, info, img, timerequrid, } = props.activitys;
    return (
        <div className='singlework'>
            <div className='info'>
                <div className='detailsDIv'>
                    <img src={img} alt="" />
                    <h3>{sactivity}</h3>
                    <p>{info.slice(0, 150)}..</p>
                    <p><small><b>Time required :{timerequrid} m.</b></small></p>
                    <p><small><b>Time :{time}</b></small></p>
                </div>

                <button onClick={() => { props.handle(props.activitys) }} className='button'>Add To List</button>
            </div>
        </div>
    );
};



export default Singlework;