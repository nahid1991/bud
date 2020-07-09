import avatar from './avatar.png';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {v4 as uuidv4} from 'uuid';

const rootReducer = function (state = {
  avatar: 'data:image/png;base64,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',
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

