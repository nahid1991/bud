import avatar from './avatar.png';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {v4 as uuidv4} from 'uuid';

const rootReducer = function (state = {
  avatar: avatar,
  generalInformation: {
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    phone: '',
    email: '',
    linkedIn: '',
    address: ''
  },
  workExperience: [],
  education: [],
  skills: [],
  certifications: [],
  publications: [],
  references: []
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
      return {
        ...state, workExperience: state.workExperience.filter(w => {
          return w.id !== action.value;
        })
      };
    case "EDIT_EXP":
      const selectedExp = state.workExperience.map(w => {
        if (w.id === action.value.id) {
          w[action.value.e.target.name] = action.value.e.target.value;
        }
        return w;
      });

      return {...state, workExperience: [...selectedExp]};
    case "ADD_EXP":
      return {
        ...state, workExperience: [...state.workExperience, {
          id: uuidv4(),
          from: "",
          to: "",
          title: "",
          address: "",
          description: ""
        }]
      };
    case "DELETE_EDU":
      return {
        ...state, education: state.education.filter(w => {
          return w.id !== action.value;
        })
      };
    case "EDIT_EDU":
      const selectedEdu = state.education.map(w => {
        if (w.id === action.value.id) {
          w[action.value.e.target.name] = action.value.e.target.value;
        }
        return w;
      });

      return {...state, education: [...selectedEdu]};
    case "ADD_EDU":
      return {
        ...state, education: [...state.education, {
          id: uuidv4(),
          from: "",
          title: "",
          address: ""
        }]
      };
    case "ADD_CATEGORY":
      return {
        ...state, skills: [...state.skills, {
          id: uuidv4(),
          category: "",
          subCategories: [
            {
              id: uuidv4(),
              name: "",
              rating: 0
            }
          ]
        }]
      };
    case "DELETE_CATEGORY":
      return {
        ...state, skills: state.skills.filter(sk => {
          return sk.id !== action.value;
        })
      };
    case "EDIT_CATEGORY":
      const categories = state.skills.map(w => {
        if (w.id === action.value.id) {
          w[action.value.e.target.name] = action.value.e.target.value;
        }
        return w;
      });

      return {...state, skills: categories};

    case "ADD_SKILL":
      return {...state, skills: state.skills.map(w => {
          if (w.id === action.value) {
            w.subCategories = [...w.subCategories, {
              id: uuidv4(),
              name: "",
              rating: 0
            }];
          }
          return w;
        })};
    case "DELETE_SKILL":
      return {...state, skills: state.skills.map(w => {
          if (w.id === action.value.parentId) {
            w.subCategories = w.subCategories.filter(s => {
              return s.id !== action.value.id;
            });
          }
          return w;
        })};
    case "EDIT_SKILL":
      return {...state, skills: state.skills.map(w => {
          if (w.id === action.value.parentId) {
            w.subCategories = w.subCategories.map(s => {
              if (s.id === action.value.id) {
                s[action.value.e.target.name] = action.value.e.target.value
              }
              return s;
            });
          }
          return w;
        })};
    case "ADD_CERTIFICATION":
      return {
        ...state, certifications: [...state.certifications,
          {
            id: uuidv4(),
            issueDate: "",
            title: "",
            institute: "",
            expireDate: "",
            link: ""
          }
        ]
      };
    case "EDIT_CERTIFICATION":
      return {
        ...state, certifications: state.certifications.map(c => {
          if (c.id === action.value.id) {
            c[action.value.e.target.name] = action.value.e.target.value
          }
          return c;
        })
      };
    case "DELETE_CERTIFICATION":
      return {
        ...state, certifications: state.certifications.filter(c => {
          return c.id !== action.value
        })
      };
    case "ADD_PUBLICATION":
      return {
        ...state, publications: [...state.publications,
          {
            id: uuidv4(),
            issueYear: "",
            title: "",
            publisher: "",
            link: ""
          }
        ]
      };
    case "EDIT_PUBLICATION":
      return {
        ...state, publications: state.publications.map(c => {
          if (c.id === action.value.id) {
            c[action.value.e.target.name] = action.value.e.target.value
          }
          return c;
        })
      };
    case "DELETE_PUBLICATION":
      return {
        ...state, publications: state.publications.filter(c => {
          return c.id !== action.value
        })
      };
    case "ADD_REFERENCE":
      return {
        ...state, references: [...state.references,
          {
            id: uuidv4(),
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            designation: "",
          }
        ]
      };
    case "EDIT_REFERENCE":
      return {
        ...state, references: state.references.map(c => {
          if (c.id === action.value.id) {
            c[action.value.e.target.name] = action.value.e.target.value
          }
          return c;
        })
      };
    case "DELETE_REFERENCE":
      return {
        ...state, references: state.references.filter(c => {
          return c.id !== action.value
        })
      }
    case "SET_ROOT_REDUCER":
      return action.value;
    default:
      return state;
  }
};

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  rootreducer: rootReducer
});

export default createRootReducer;

