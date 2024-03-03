import React from 'react';
import style from './Calculator.style';
import Survey from '@/components/survey/Survey';

const CalculatorContainer = () => {
  return (
    <section>
      <h2 className="blind">상속세 계산기 페이지</h2>

      <div>
        <Survey>
          <Survey.Title>상속인</Survey.Title>
          <Survey.Question>피상속인(사망자)의 배우자가 있나요?</Survey.Question>
          <Survey.Radio>네</Survey.Radio>
          <Survey.Radio>아니오</Survey.Radio>

          <Survey.Question>피상속인(사망자)의 자녀가 있나요?</Survey.Question>
          <Survey.Radio>네</Survey.Radio>
          <Survey.Radio>아니오</Survey.Radio>

          <Survey.Tip>*피상속인의 자녀가 없는경우 직계존속이 배우자와 공동상속인이 됩니다.</Survey.Tip>
        </Survey>

        <Survey>
          <Survey.Title>상속공제</Survey.Title>
          <Survey.Question>그 밖의 인적공제를 계산하겠습니까?</Survey.Question>
          <Survey.Radio>네</Survey.Radio>
          <Survey.Radio>아니오</Survey.Radio>
          <Survey.Tip>
            *그 밖의 인적공제란? 자녀공제, 미성년자공제, 연로자공제, 장애인공제를 의미합니다. *그 밖의 인적공제
            합계금액이 3억원 미만인 경우 일괄공제가 유리합니다. *일괄공제란? MAX [ ①일괄공제(5억) ,
            ②(기초공제(2억)+그밖의인적공제) ] * '아니오' 선택시 일괄공제가 적용됩니다. (단, 배우자단독상속인경우는
            일괄공제 적용안됨)
          </Survey.Tip>
          적용가능한 물적상속공제를 선택하세요
        </Survey>
      </div>
    </section>
  );
};

export default CalculatorContainer;
