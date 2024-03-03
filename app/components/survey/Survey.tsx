type TProps = {
  children?: any;
};

import Title from './parts/Title';
import Question from './parts/Question';
import Radio from './parts/Radio';
import Toggle from './parts/Toggle';
import InputText from './parts/InputText';
import Tip from './parts/Tip';

const Survey = ({ children }: TProps) => {
  return <div>{children}</div>;
};

export default Object.assign(Survey, {
  Title,
  Question,
  Radio,
  Toggle,
  InputText,
  Tip,
});
