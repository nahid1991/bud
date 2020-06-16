import avatar from './avatar.png';

const rootReducer = function (state = {
  avatar: avatar,
  name: ""
}, action) {
  switch (action.type) {
    case "NAME":
      return {...state, name: action.value};
    case "AVATAR":
      return {...state, avatar: action.value};
    default:
      return state;
  }
};

export default rootReducer;

