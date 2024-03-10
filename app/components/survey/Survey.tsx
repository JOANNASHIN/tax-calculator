import Title from './parts/Title';
import Question from './parts/Question';
import Answer from './parts/Answer';
import Radio from './parts/Radio';
import Toggle from './parts/Toggle';
import InputText from './parts/InputText';
import Tip from './parts/Tip';
import Button from './parts/Button';
import Bottom from './parts/Bottom';

type TProps = {
  children?: any;
};

const Survey = ({ children }: TProps) => {
  return <div className="survey">{children}</div>;
};

export default Object.assign(Survey, {
  Title,
  Question,
  Answer,
  Radio,
  Toggle,
  InputText,
  Tip,
  Button,
  Bottom,
});
