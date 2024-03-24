import Survey from '@/components/survey/Survey';
import useFunnel from '@/hooks/useFunnel';
import useForm from '@/hooks/useUpdateForm';
import { useRouter } from 'next/router';

const MAX_STEP = 2;

const CalculatorContainer = () => {
  const router = useRouter();
  const { getForm, updateForm } = useForm();

  const form = getForm();

  const { step, goPrevStep, goNextStep } = useFunnel({
    maxStep: MAX_STEP,
  });

  const checkValidate = () => {};

  const handlePrev = () => {
    goPrevStep();
  };

  const handleNext = () => {
    if (MAX_STEP === step) {
      router.push('/last');
      return;
    }

    const form = getForm();

    console.log(form, 'form');

    goNextStep();
  };

  return (
    <>
      <Survey>
        <Survey.Title>상속인</Survey.Title>
        <Survey.Question>
          <em>피상속인(사망자)</em>의 배우자가 있나요?
        </Survey.Question>
        <Survey.Answer>
          <Survey.Radio name={'step1-1'} value="Y" onChange={updateForm} required>
            네
          </Survey.Radio>
          <Survey.Radio name={'step1-1'} value="N" onChange={updateForm} required>
            아니오
          </Survey.Radio>
        </Survey.Answer>

        <Survey.Question>
          <em>피상속인(사망자)</em>의 자녀가 있나요?
        </Survey.Question>

        <Survey.Answer>
          <Survey.InputNumber name={'step1-2'} placeholder="N" maxLength={20} onChange={updateForm} unit="명" />
        </Survey.Answer>

        {form['step1-2'] != 0 && (
          <>
            <Survey.Question>
              <em>피상속인(사망자)</em>의 부모가 있나요?
            </Survey.Question>
            <Survey.Answer>
              <label>
                <Survey.InputNumber
                  name={'step1-3'}
                  placeholder="N"
                  maxLength={2}
                  onChange={updateForm}
                  disabled={form['step1-2'] == 0}
                  unit="명"
                />
              </label>
            </Survey.Answer>
          </>
        )}

        <Survey.Tip>*피상속인의 자녀가 없는경우 직계존속이 배우자와 공동상속인이 됩니다.</Survey.Tip>
      </Survey>

      <Survey>
        <Survey.Title>상속공제</Survey.Title>

        <Survey.Question>배우자상속공제를 계산하겠습니까?</Survey.Question>
        <Survey.Answer>
          <Survey.Radio name={'step2-1'} value="Y" onChange={updateForm}>
            네
          </Survey.Radio>
          <Survey.Radio name={'step2-1'} value="N" onChange={updateForm}>
            아니오
          </Survey.Radio>
        </Survey.Answer>

        {form['step2-1'] === 'Y' && (
          <>
            <Survey.Question>배우자가 실제상속받은 재산이 5억원 이상입니까?</Survey.Question>
            <Survey.Answer>
              <Survey.Radio name={'step2-2'} value="Y" onChange={updateForm}>
                네
              </Survey.Radio>
              <Survey.Radio name={'step2-2'} value="N" onChange={updateForm}>
                아니오
              </Survey.Radio>
            </Survey.Answer>
          </>
        )}

        {form['step2-2'] === 'Y' && (
          <>
            <Survey.Question>배우자가 실제상속받은 금액을 입력하세요.</Survey.Question>
            <Survey.Answer>
              <Survey.InputNumber name={'step2-3'} onChange={updateForm} placeholder={0} unit="원" />
            </Survey.Answer>
            {/* <Survey.Tip>*최소금액(5억) ~ 최대금액(상속재산범위까지)</Survey.Tip> */}{' '}
          </>
        )}

        <Survey.Question>그 밖의 인적공제를 계산하겠습니까?</Survey.Question>
        <Survey.Answer>
          <Survey.Radio name={'step2-4'} value="Y" onChange={updateForm}>
            네
          </Survey.Radio>
          <Survey.Radio name={'step2-4'} value="N" onChange={updateForm}>
            아니오
          </Survey.Radio>
        </Survey.Answer>
        <Survey.Tip>
          * 그 밖의 인적공제란? 자녀공제, 미성년자공제, 연로자공제, 장애인공제를 의미합니다. <br />
          * 그 밖의 인적공제 합계금액이 3억원 미만인 경우 일괄공제가 유리합니다. <br />
          * 일괄공제란? MAX [ ①일괄공제(5억) , ②(기초공제(2억)+그밖의인적공제) ]<br />
          * '아니오' 선택시 일괄공제가 적용됩니다. <br />
          (단, 배우자단독상속인경우는 일괄공제 적용 안됨)
        </Survey.Tip>

        <Survey.Question>상속인 이외의 동거가족이 있나요?</Survey.Question>
        <Survey.Answer>
          <Survey.Checkbox name={'step2-5'} value="부모" onChange={updateForm}>
            부모
          </Survey.Checkbox>
          <Survey.Checkbox name={'step2-5'} value="손자녀" onChange={updateForm}>
            손자녀
          </Survey.Checkbox>
          <Survey.Checkbox name={'step2-5'} value="형제자매" onChange={updateForm}>
            형제자매
          </Survey.Checkbox>

          <Survey.Checkbox name={'step2-5'} value="장인/장모/시부모" onChange={updateForm}>
            장인/장모/시부모
          </Survey.Checkbox>
        </Survey.Answer>
        <Survey.Tip>
          * 동거가족이란? 상속개시일 현재 피상속인이 사실상 부양하고 있는 직계존비속(배우자의 직계존속 포함) 및
          형제자매를 의미합니다.
        </Survey.Tip>

        <Survey.Question>상속인 및 동거가족 중 해당사항이 있는 공제를 선택하세요.</Survey.Question>
        <Survey.Answer>
          <Survey.Checkbox name={'step2-6'} value="부모" onChange={updateForm}>
            미성년자공제
          </Survey.Checkbox>
          <Survey.InputNumber name={'step2-6-1'} placeholder={'N'} onChange={updateForm} unit="명" />
          <br />
          <br />
          <Survey.Checkbox name={'step2-6'} value="손자녀" onChange={updateForm}>
            연로자공제
          </Survey.Checkbox>
          <br />
          <br />
          <Survey.Checkbox name={'step2-6'} value="형제자매" onChange={updateForm}>
            장애인공제
          </Survey.Checkbox>
        </Survey.Answer>
        <Survey.Tip>
          *미성년자란? 사망일 당시 만19세 미만인 자를 의미합니다.
          <br />
          *연로자란? 사망일 당시 만65세 이상인 자를 의미합니다.
        </Survey.Tip>
      </Survey>

      <Survey.Bottom>
        {step !== 1 && (
          <Survey.Button style={{ background: '#ddd' }} onClick={handlePrev}>
            Previous
          </Survey.Button>
        )}
        <Survey.Button onClick={handleNext}>Next </Survey.Button>
      </Survey.Bottom>
    </>
  );
};

export default CalculatorContainer;
