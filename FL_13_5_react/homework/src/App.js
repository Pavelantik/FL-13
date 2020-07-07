import React from 'react';
import './App.css';

import MyButton from './button.js'
import HeaderSection from './headersection.js'
import   CourseList from './courselist'
import { connect } from 'react-redux';
import {getFilteredList} from './actions'


// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">Learn React!</header>
//       <MyButton title='MyNew Butt'/>

//       <HeaderSection/>
//       <CourseList courseList={props.editList}/>
//     </div>
//     );
//   }

  class App extends React.Component {
    constructor(props){
      super(props);
      this.handleFilterChange = this.handleFilterChange.bind(this)

    }
    handleFilterChange(e){
      // alert(e); 
      //this.filerLis(e)


    }

    

    render() {
      const { courseList, filerLis } = this.props;
      return (
        <div className="App">
              <header className="App-header">Learn React!</header>
              <MyButton title='MyNew Butt'/>
        
              <HeaderSection onFilterChange={ filerLis}/>
             <CourseList courseList={courseList}/>
         </div>
      );
    }
  }


  function applFilter (arr, filter){
    let newAr = arr.filter((val) => { return val.title.toLowerCase().includes(filter.toLowerCase()) })
    console.log(newAr)
    return newAr;
  }
  const mapStateToProps = (state, ownProps) => {
   console.log(state)
    return {
      courseList: applFilter(state.editList, state.filteredCourses),
      filter: state.filteredCourses
    }
}
const mapDispatchToProps= (dispatch, ownProps) => ({
    filerLis: (ownProps) => dispatch(getFilteredList(ownProps))
})




export default connect (mapStateToProps, mapDispatchToProps)(App);
