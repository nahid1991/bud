import work from './work.png';
import education from './education.png';

const IconSelector = (imageString) => {
  switch (imageString) {
    case "work":
      return work;
    case "education":
      return education;
    default:
      return work;
  }
}

export default IconSelector;