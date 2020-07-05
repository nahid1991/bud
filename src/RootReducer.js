import avatar from './avatar.png';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { v4 as uuidv4 } from 'uuid';

  const rootReducer = function (state = {
    avatar: avatar,
    name: "",
    generalInformation: {
      firstName: "",
      lastName: "",
      dob: "",
      nationality: "",
      phone: "",
      email: "",
      linkedIn: "",
      address: ""
    },
    workExperience: [
      {
        id: uuidv4(),
        from: "",
        to: "",
        title: "",
        address: "",
        description: ""
      }
    ],
    education: [
      {
        id: uuidv4(),
        from: "",
        title: "",
        address: ""
      }
    ]
  }, action) {
  switch (action.type) {
    case "NAME":
      return {...state, name: action.value};
    case "AVATAR":
      return {...state, avatar: action.value};
    case "FIRST_NAME":
      return {...state, generalInformation: {...state.generalInformation, firstName: action.value}};
    case "LAST_NAME":
      return {...state, generalInformation: {...state.generalInformation, lastName: action.value}};
    case "DOB":
      return {...state, generalInformation: {...state.generalInformation, dob: action.value}};
    case "NATIONALITY":
      return {...state, generalInformation: {...state.generalInformation, nationality: action.value}};
    case "PHONE":
      return {...state, generalInformation: {...state.generalInformation, phone: action.value}};
    case "EMAIL":
      return {...state, generalInformation: {...state.generalInformation, email: action.value}};
    case "LINKEDIN":
      return {...state, generalInformation: {...state.generalInformation, linkedIn: action.value}};
    case "ADDRESS":
      return {...state, generalInformation: {...state.generalInformation, address: action.value}};
    case "DELETE_EXP":
      return {...state, workExperience: state.workExperience.filter(w => {
          return w.id !== action.value;
        })};
    case "EDIT_EXP":
      const selectedExp = state.workExperience.map(w => {
        if(w.id === action.value.id) {
          w[action.value.e.target.name] = action.value.e.target.value;
        }
        return w;
      });

      return {...state, workExperience: [...selectedExp]};
    case "ADD_EXP":
      return {...state, workExperience: [...state.workExperience, {
        id: uuidv4(),
          from: "",
          to: "",
          title: "",
          address: "",
          description: ""
      }]};
    case "DELETE_EDU":
      return {...state, education: state.education.filter(w => {
          return w.id !== action.value;
        })};
    case "EDIT_EDU":
      const selectedEdu = state.education.map(w => {
        if(w.id === action.value.id) {
          w[action.value.e.target.name] = action.value.e.target.value;
        }
        return w;
      });

      return {...state, education: [...selectedEdu]};
    case "ADD_EDU":
      return {...state, education: [...state.education, {
          id: uuidv4(),
          from: "",
          title: "",
          address: ""
        }]}
    default:
      return state;
  }
};

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  rootreducer: rootReducer
});

export default createRootReducer;

