import React from 'react';
import './CourseItem.css'; 


function CourseItem(props){
    return (
    <li>
       <span className='dateContainer'>
        {props.value.date}
       </span>
       <span className='titleContainer'>
        {props.value.title}
       </span>

       <span className='descriptionContainer'>
        {props.value.description}
       </span>
       <span className='descriptionContainer'>
        {props.value.duration}
       </span>

    </li>)
    };
export default  CourseItem;