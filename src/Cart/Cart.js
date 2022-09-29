
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { useState } from 'react';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({ active }) => {
    let totaltime = 0;
    for (const activitys of active) {
        totaltime = totaltime + activitys.timerequrid;
        console.log(totaltime)
    }

    let [breakTime, setBreakTime] = useState(0);
    let breakTimetotal = (value) => {
        let initialtime = value;
        setBreakTime(initialtime);
    }


    const notify = () => toast("Wow Great! You Have Done Your All Tasks");



    return (

        <div div id='' >
            <div className='doneactive cart'>
                <div className='user'>
                    <img src="https://scontent.fdac96-1.fna.fbcdn.net/v/t1.6435-9/133694607_1547988878922362_9006881551894245567_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF7ErlmVTYhAVni9H9-IBMQHvP3ohkVihwe8_eiGRWKHFGLHjQB9SsNFuRdXubTHrrSADdivIVJsFMANFGQZk79&_nc_ohc=yiGkOoZwrKAAX9l65jx&_nc_ht=scontent.fdac96-1.fna&oh=00_AT8AcAddaIDoigUKPD_wihFfiyKETF3KEDfP2lWSm02yzw&oe=635B608E" alt="" />

                    <div>
                        <h3>All-Hafesh Soumik</h3>
                        <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,Bangladesh</p>
                    </div>
                </div>

                <div className="totalinfo">
                    <div className='myinfo'>
                        <div>
                            <p><b>Age</b></p>
                            <p><small><b>20</b> Years</small></p>
                        </div>
                        <div>
                            <p><b>Semester</b></p>
                            <p><b>3rd</b><small> Semester</small></p>
                        </div>
                        <div>
                            <p><b>University</b></p>
                            <p><small><b>Dhaka Int. University</b> </small></p>
                        </div>

                    </div>

                </div>
                <div className='btnDiv'>
                    <h2>Add A Break</h2>
                    <div className='break'>
                        <button onClick={() => { breakTimetotal(5) }}><span>05</span>m</button>
                        <button onClick={() => { breakTimetotal(10) }}><span>10</span>m</button>
                        <button onClick={() => { breakTimetotal(15) }}><span>15</span>m</button>
                        <button onClick={() => { breakTimetotal(20) }}><span>20</span>m</button>
                        <button onClick={() => { breakTimetotal(30) }}><span>30</span>m</button>


                    </div>


                </div>
                <div className="taks">
                    <h5> Total Task: {active.length} </h5>
                    <h4>Task Schedule</h4>
                </div>
                <div className='task'>
                    <h3> Task Time : {totaltime} <small>minutes</small></h3>
                </div>
                <div className='task'>
                    <h3> Break Time : {breakTime}</h3>
                </div>
                <button onClick={notify} id='button'>
                    Activity Complete
                </button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Cart;