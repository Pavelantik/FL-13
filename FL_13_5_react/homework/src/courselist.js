import React from 'react';
import CourseItem from './/couseitem'
//import { connect } from 'react-redux';

const arrr = [11,21,13,4,5];
function CourseList(props){
    return (
    <ul>
    {props.courseList.map((item, index) => <CourseItem key={index} value={item}/> )}
       
    </ul>)
    };


    

export default  CourseList;