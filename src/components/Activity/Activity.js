
import './Acitvity.css'
import React, { useEffect, useState } from 'react';
import Singlework from '../Singlework/Singlework';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import Cart from '../../Cart/Cart';
import Answer from '../Answer/Answer';

const Activity = () => {
    const [activity, setactivity] = useState([]);
    const [active, setActive] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setactivity(data))
    }, []);
    const handleCart = (activity) => {
        // console.log(activity);
        const newActive = [...active, activity];
        setActive(newActive);
        // console.log(newActive);
    }
    return (
        <div>

            <div className='headertext'>
                <h1> <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon> Active Your Life</h1>

                <h3>Select Your Todays Task</h3>
            </div>
            <div className='activity-container' >



                <div>
                    <div className='card'>



                        {
                            activity.map(activitys => <Singlework handle={handleCart} key={activitys.id} activitys={activitys}  ></Singlework>

                            )
                        }
                    </div>
                    <Answer></Answer>
                </div>

                <Cart active={active}></Cart>

            </div >

        </div>
    );
};

export default Activity;