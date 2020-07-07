
import { GET_FULL_LIST, ADD_NEW_COURSE, FILTER_LIST } from "./actionsType";
import { combineReducers } from 'redux';


const initialState = {
    courses: [{
        title: 'Components',
        description:'Components, Lifecycle, lndgoiuresngoiudnrsgnrg iong ionaeriog nior gnewoir nwoi ntiownt  ionew oiwe n...',
        duration: '1h30m',
        author:'',
        date:'18.02.2020',
    },
    {
        title: 'React',
        description:'Redux, JSX...',
        duration: '3h30m',
        author:'',
        date:'25.02.2020',
    }],
    filteredCourses: ''
  };

function filteredCourses( state = initialState.filteredCourses, action){
    switch(action.type) {
        case FILTER_LIST:
          return action.payload;
        default:
          return state;
    }
}

  function editList(state = initialState.courses, action){
    switch(action.type) {
        case GET_FULL_LIST:
          return [ ...state];
        case ADD_NEW_COURSE:
          return [ ...state, action.payload ];
        default:
          return state;
      }     
  }
  
  const addReducer = combineReducers({
    editList,
    filteredCourses
  });

  export default addReducer;
