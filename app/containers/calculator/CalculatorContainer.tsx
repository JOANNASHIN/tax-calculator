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
    <Survey.Box>
      {/* 상속인 */}
      <Survey>
        <Survey.Title>상속인</Survey.Title>
        <Survey.Box>
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
        </Survey.Box>

        <Survey.Box>
          <Survey.Question>
            <em>피상속인(사망자)</em>의 자녀가 있나요?
          </Survey.Question>

          <Survey.Answer>
            <Survey.InputNumber name={'step1-2'} placeholder="N" maxLength={20} onChange={updateForm} unit="명" />
          </Survey.Answer>
        </Survey.Box>

        {form['step1-2'] != 0 && (
          <Survey.Box>
            <Survey.Question>
              <em>피상속인(사망자)</em>의 부모가 있나요?
            </Survey.Question>
            <Survey.Answer>
              <Survey.InputNumber
                name={'step1-3'}
                placeholder="N"
                maxLength={2}
                onChange={updateForm}
                disabled={form['step1-2'] == 0}
                unit="명"
              />
            </Survey.Answer>

            <Survey.Tip>*피상속인의 자녀가 없는경우 직계존속이 배우자와 공동상속인이 됩니다.</Survey.Tip>
          </Survey.Box>
        )}
      </Survey>

      {/* 상속공제 */}
      <Survey>
        <Survey.Title>상속공제</Survey.Title>
        {/* Q */}
        <Survey.Box>
          <Survey.Question>배우자상속공제를 계산하겠습니까?</Survey.Question>
          <Survey.Answer>
            <Survey.Radio name={'step2-1'} value="Y" onChange={updateForm}>
              네
            </Survey.Radio>
            <Survey.Radio name={'step2-1'} value="N" onChange={updateForm}>
              아니오
            </Survey.Radio>
          </Survey.Answer>
        </Survey.Box>
        {form['step2-1'] === 'Y' && (
          <Survey.Box>
            <Survey.Question>배우자가 실제상속받은 재산이 5억원 이상입니까?</Survey.Question>
            <Survey.Answer>
              <Survey.Radio name={'step2-2'} value="Y" onChange={updateForm}>
                네
              </Survey.Radio>
              <Survey.Radio name={'step2-2'} value="N" onChange={updateForm}>
                아니오
              </Survey.Radio>
            </Survey.Answer>
          </Survey.Box>
        )}
        {form['step2-2'] === 'Y' && (
          <Survey.Box>
            <Survey.Question>배우자가 실제상속받은 금액을 입력하세요.</Survey.Question>
            <Survey.Answer>
              <Survey.InputNumber name={'step2-3'} onChange={updateForm} placeholder={0} unit="원" />
            </Survey.Answer>
            {/* <Survey.Tip>*최소금액(5억) ~ 최대금액(상속재산범위까지)</Survey.Tip> */}{' '}
          </Survey.Box>
        )}
        {/* Q */}
        <Survey.Box>
          <Survey.Question>
            그 밖의 인적공제(자녀공제, 미성년자공제, 연로자공제, 장애인공제를)를 계산하겠습니까?
          </Survey.Question>
          <Survey.Answer>
            <Survey.Radio name={'step2-4'} value="Y" onChange={updateForm}>
              네
            </Survey.Radio>
            <Survey.Radio name={'step2-4'} value="N" onChange={updateForm}>
              아니오
            </Survey.Radio>
          </Survey.Answer>
          <Survey.Tip>
            * 그 밖의 인적공제 합계금액이 3억원 미만인 경우 일괄공제가 유리합니다. <br />
            * 일괄공제는 MAX [ ①일괄공제(5억) , ②(기초공제(2억)+그밖의인적공제) ]<br />* '아니오' 선택시 일괄공제가
            적용됩니다. (단, 배우자단독상속인경우는 일괄공제 적용 안됨)
          </Survey.Tip>
        </Survey.Box>
        {form['step2-4'] === 'Y' && (
          <>
            {/* Q */}
            <Survey.Box>
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
                * 동거가족은 상속개시일 현재 피상속인이 사실상 부양하고 있는 직계존비속(배우자의 직계존속 포함) 및
                형제자매를 의미합니다.
              </Survey.Tip>
            </Survey.Box>
            {/* Q */}
            <Survey.Box>
              <Survey.Question>상속인 및 동거가족 중 해당사항이 있는 공제를 선택하세요.</Survey.Question>
              <Survey.Answer>
                <Survey.Checkbox name={'step2-6'} value="미성년자공제" onChange={updateForm}>
                  미성년자공제
                </Survey.Checkbox>
                {/* TODO */}
                {/* <Survey.InputNumber name={'step2-6-1'} placeholder={'1'} onChange={updateForm} unit="명" /> */}
                {/* <Survey.InputNumber name={'step2-6-1'} placeholder={'N'} onChange={updateForm} unit="세" /> */}
                <br />
                <br />
                <Survey.Checkbox name={'step2-6'} value="연로자공제" onChange={updateForm}>
                  연로자공제
                </Survey.Checkbox>
                <br />
                <br />
                <Survey.Checkbox name={'step2-6'} value="장애인공제" onChange={updateForm}>
                  장애인공제
                </Survey.Checkbox>
                {/* TODO */}
                {/* <Survey.InputNumber name={'step2-6-1'} placeholder={'N'} onChange={updateForm} unit="명" />
          <Survey.InputNumber name={'step2-6-1'} placeholder={'N'} onChange={updateForm} unit="세" />
          장애인1 기대여명 입력 */}
              </Survey.Answer>
              <Survey.Tip>
                *미성년자란? 사망일 당시 만19세 미만인 자를 의미합니다.
                <br />
                *연로자란? 사망일 당시 만65세 이상인 자를 의미합니다.
              </Survey.Tip>
            </Survey.Box>
          </>
        )}
        {/* Q - 동거주택상속공제 */}
        <Survey.Box>
          <Survey.Question>피상속인의 재산 중 주택이 있습니까? (동거주택상속공제)</Survey.Question>
          <Survey.Answer>
            <Survey.Radio name={'step2-7'} value="Y" onChange={updateForm}>
              네
            </Survey.Radio>
            <Survey.Radio name={'step2-7'} value="N" onChange={updateForm}>
              아니오
            </Survey.Radio>
          </Survey.Answer>
        </Survey.Box>

        {form['step2-7'] === 'Y' && (
          <>
            <Survey.Box>
              <Survey.Question>동거상속주택의 금액을 입력하세요</Survey.Question>
              <Survey.Answer>
                <Survey.InputText name={'step2-7-1'} onChange={updateForm} value={0} unit="원" />
              </Survey.Answer>
            </Survey.Box>
            <Survey.Box>
              <Survey.Question>동거상속주택의 채무금액을 입력하세요</Survey.Question>
              <Survey.Answer>
                <Survey.InputText name={'step2-7-2'} onChange={updateForm} value={0} unit="원" />
              </Survey.Answer>
            </Survey.Box>

            <Survey.Box>
              <Survey.Question>
                동거주택상속공제의 요건이 충족되었습니까?
                <em className="color-red" style={{ fontSize: '1rem', paddingLeft: '1rem' }}>
                  *실제 자료 검토시에 공제요건이 충족되지 않으면 달라질 수 있습니다.
                </em>
              </Survey.Question>

              <Survey.Answer>
                <Survey.Radio name={'step2-7-3'} value="Y" onChange={updateForm}>
                  네
                </Survey.Radio>
                <Survey.Radio name={'step2-7-3'} value="N" onChange={updateForm}>
                  아니오
                </Survey.Radio>
              </Survey.Answer>
              <Survey.Tip>
                [동거주택상속공제 요건] <br />
                1. 피상속인과 상속인이 상속개시일부터 소급하여 10년이상 계속하여 하나의 주택에서 동거할 것<br />
                2. 피상속인과 상속인이 상속개시일부터 소급하여 10년이상 계속하여 1세대를 구성하면서 1세대 1주택에 해당할
                것<br />
                3. 상속개시일 현재 무주택이거나 피상속인과 공동으로 1세대 1주택을 보유한 자로서, 피상속인과 동거한
                상속인이 상속받은 주택일 것<br />
                <br />
              </Survey.Tip>
            </Survey.Box>
          </>
        )}

        {/* Q - 재해손실공제 */}
        <Survey.Box>
          <Survey.Question>상속재산이 화재,자연재해 등으로 손실되었습니까? (재해손실공제)</Survey.Question>

          <Survey.Answer>
            <Survey.Radio name={'step2-8'} value="Y" onChange={updateForm}>
              네
            </Survey.Radio>
            <Survey.Radio name={'step2-8'} value="N" onChange={updateForm}>
              아니오
            </Survey.Radio>
          </Survey.Answer>
        </Survey.Box>

        {form['step2-8'] === 'Y' && (
          <>
            <Survey.Box>
              <Survey.Question>화재등이 상속세신고기한내에 발생하였습니까?</Survey.Question>

              <Survey.Answer>
                <Survey.Radio name={'step2-8-1'} value="Y" onChange={updateForm}>
                  네
                </Survey.Radio>
                <Survey.Radio name={'step2-8-1'} value="N" onChange={updateForm}>
                  아니오
                </Survey.Radio>
              </Survey.Answer>
              <Survey.Tip>상속세신고기한은 '상속개시일(사망일)이 속하는 달의 말일부터 6개월이내'까지입니다.</Survey.Tip>
            </Survey.Box>
            {form['step2-8-1'] === 'Y' && (
              <>
                <Survey.Box>
                  <Survey.Question>상속재산의 손실가액을 입력하세요</Survey.Question>
                  <Survey.Answer>
                    <Survey.InputNumber name={'step2-8-2'} onChange={updateForm} value={0} unit="원" />
                  </Survey.Answer>
                </Survey.Box>
                <Survey.Box>
                  <Survey.Question>보험금, 구상권청구금액을 입력하세요</Survey.Question>
                  <Survey.Answer>
                    <Survey.InputNumber name={'step2-8-3'} onChange={updateForm} value={0} unit="원" />
                  </Survey.Answer>
                </Survey.Box>
              </>
            )}
          </>
        )}
      </Survey>

      {/* 상속재산 */}
      <Survey>
        <Survey.Title>상속재산</Survey.Title>

        <Survey.Box>
          <Survey.Question>상속재산을 선택하세요.</Survey.Question>
          <Survey.Answer>
            <Survey.Checkbox name={'step2-9'} value="부동산" onChange={updateForm}>
              부동산
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '부동산') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="아파트, 상가, 토지등의 부동산가액을 입력하세요."
                  unit="원"
                />
                <Survey.Tip>
                  *부동산가액은 상속개시일 현재의 시가를 입력하며, 시가가 없는경우에는 기준시가를 입력하세요.
                </Survey.Tip>
              </>
            )}
            <br />
            <br />

            <Survey.Checkbox name={'step2-9'} value="금융재산" onChange={updateForm}>
              금융재산
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '금융재산') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="현금, 예적금, 주식, 출자금등의 금융재산을 금액을 입력하세요."
                  unit="원"
                />
              </>
            )}
            <br />
            <br />

            <Survey.Checkbox name={'step2-9'} value="기타재산 (권리등)" onChange={updateForm}>
              기타재산 (권리등)
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '기타재산') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="전세권, 임차보증금, 분양권등 부동산, 금융재산 이외의 재산적가치가 있는 권리등의 금액을 입력하세요."
                  unit="원"
                />
              </>
            )}
            <br />
            <br />
            <Survey.Checkbox name={'step2-9'} value="퇴직금보험금신탁재산" onChange={updateForm}>
              퇴직금,보험금,신탁재산
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '퇴직금보험금신탁재산') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="퇴직금, 보험금, 신탁재산가액을 입력하세요."
                  unit="원"
                />
              </>
            )}
            <br />
            <br />
          </Survey.Answer>
        </Survey.Box>
      </Survey>

      {/* 채무, 장례비용 */}
      <Survey>
        <Survey.Title>채무, 장례비용</Survey.Title>

        <Survey.Box>
          <Survey.Question>채무등 차감 항목을 선택하세요.</Survey.Question>
          <Survey.Answer>
            <Survey.Checkbox name={'step2-9'} value="일반채무" onChange={updateForm}>
              채무 (일반)
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '일반채무') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="피상속인(사망자)의 채무금액을 입력하세요. (예: 임대보증금 등)"
                  unit="원"
                />
              </>
            )}
            <br />
            <br />

            <Survey.Checkbox name={'step2-9'} value="금융기관채무" onChange={updateForm}>
              채무 (금융기관)
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '금융기관채무') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="피상속인(사망자)의 채무금액을 입력하세요. (예: 근저당권, 은행채무 등)"
                  unit="원"
                />
              </>
            )}
            <br />
            <br />

            <Survey.Checkbox name={'step2-9'} value="공과금" onChange={updateForm}>
              공과금
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '공과금') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="피상속인(사망자)의 공과금을 입력하세요. (예: 미납세금, 미납 공공요금 등)"
                  unit="원"
                />
              </>
            )}
            <br />
            <br />
            <Survey.Checkbox name={'step2-9'} value="장례비" onChange={updateForm}>
              장례비
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '장례비') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="장례비용을 입력하세요."
                  unit="원"
                />
                <Survey.Tip>
                  *장례비는 최소 500만원이 적용됩니다. <br />
                  {/* 입력할 금액이 그 이하인 경우에는 입력하지 마세요. */}
                  *장례비의 한도는 1,000만원입니다.
                  <br />
                </Survey.Tip>
              </>
            )}
            <br />
            <br />

            <Survey.Checkbox name={'step2-9'} value="봉안시설자연장지비용" onChange={updateForm}>
              봉안시설, 자연장지비용
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '봉안시설자연장지비용') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="봉안시설, 자연장지비용을 입력하세요."
                  unit="원"
                />
                <Survey.Tip>
                *봉안시설, 자연장지비용의 한도는 500만원입니다.
                  <br />
                </Survey.Tip>
              </>
            )}
            <br />
            <br />

            <Survey.Checkbox name={'step2-9'} value="감정평가수수료" onChange={updateForm}>
              감정평가수수료
            </Survey.Checkbox>
            {form['step2-9'].some(v => v === '감정평가수수료') && (
              <>
                <Survey.InputText
                  name={'step2-8-2'}
                  onChange={updateForm}
                  value={0}
                  placeholder="상속재산을 감정평가 받은 경우 해당 수수료를 입력하세요."
                  unit="원"
                />
                <Survey.Tip>
                *상속재산을 감정평가 받은 경우 해당 수수료를 입력하세요.<br />
*부동산평가시 한도금액 (500만원)
                  <br />
                </Survey.Tip>
              </>
            )}
            <br />
            <br />
          </Survey.Answer>
        </Survey.Box>
      </Survey>

      <Survey.Bottom>
        {step !== 1 && (
          <Survey.Button style={{ background: '#ddd' }} onClick={handlePrev}>
            Previous
          </Survey.Button>
        )}
        <Survey.Button onClick={handleNext}>Next </Survey.Button>
      </Survey.Bottom>
    </Survey.Box>
  );
};

export default CalculatorContainer;
