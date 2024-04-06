import Title from './parts/Title';
import Box from './parts/Box';
import Question from './parts/Question';
import Answer from './parts/Answer';
import Radio from './parts/Radio';
import Checkbox from './parts/Checkbox';
import Selectbox from './parts/Selectbox';
import Toggle from './parts/Toggle';
import InputPrice from './parts/InputPrice';
import InputNumber from './parts/InputNumber';
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
  Box,
  Question,
  Answer,
  Radio,
  Checkbox,
  Selectbox,
  Toggle,
  InputPrice,
  InputNumber,
  Tip,
  Button,
  Bottom,
});
