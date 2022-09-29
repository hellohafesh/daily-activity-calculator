import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';


const Cart = ({ active }) => {
    return (

        <div className='doneactive'>
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
                        <p><small>20 Years</small></p>
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
                    <button><span>05</span>m</button>
                    <button><span>10</span>m</button>
                    <button><span>15</span>m</button>
                    <button><span>20</span>m</button>
                    <button><span>30</span>m</button>

                </div>

            </div>
            <div className="taks">
                <h5> Total Task: {active.length} </h5>
                <h4>Task Sechidule</h4>
            </div>
            <div className='task'>
                <h2> Task Time :</h2>
            </div>
            <div className='task'>
                <h2> Break Time :</h2>
            </div>
            <button id='button'>
                Activity Complete
            </button>
        </div>

    );
};

export default Cart;