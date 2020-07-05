import avatar from './avatar.png';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { v4 as uuidv4 } from 'uuid';

  const rootReducer = function (state = {
    avatar: avatar,
    name: "Nahid Islam",
    generalInformation: {
      firstName: "Nahid",
      lastName: "Islam",
      dob: "1993-03-06",
      nationality: "Bangladeshi",
      phone: "+8801799783804",
      email: "nahidshaiket10300@gmail.com",
      linkedIn: "https://www.linkedin.com/in/nahid-islam-shaiket-5a079ba3/",
      address: "80 East Tejturi Bazar, Tejgaon, Dhaka, Bangladesh"
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
    case "DELETE_EXPERIENCE":
      return {...state, workExperience: state.workExperience.filter(w => {
          return w.id !== action.value;
        })};
    case "EDIT_EXP":
      return {...state, workExperience: [...state.workExperience.filter(w => {
        return w.id !== action.value.id
        }), action.value]};
    case "ADD_EXP":
      return {...state, workExperience: [...state.workExperience, {
        id: uuidv4(),
          from: "",
          to: "",
          title: "",
          address: "",
          description: ""
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

