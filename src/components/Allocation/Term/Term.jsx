import { useState } from 'react';
import calender from '../../../assets/calender.svg';
import * as S from './styled';

function Term() {
  const startDate = '2003.01.01';
  const date = new Date;
  const today = `${date.getFullYear()}.${String(date.getMonth() +1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

  const isValid = (newValue) => {
    const Pattern = /^\d{4}\.\d{2}.\d{2}/;
    return Pattern.test(newValue);
  }

  const [startValue, setStartValue] = useState(startDate);
  const handleStart = (e) => {
    if (!/[\d.]/.test(e.key)) {
      e.preventDefault();
    }
  }
  const StartChange = (e) => {
    setStartValue(e.target.value);
  }
  const StartBlur = (e) => {
    let newValue = e.target.value;
    if (!isValid(newValue)) {
      setStartValue(startDate);
    } else {
      setStartValue(newValue);
    }
  }

  const [endValue, setEndValue] = useState(today);
  const handleEnd = (e) => {
    if (!/[\d.]/.test(e.key)) {
      e.preventDefault();
    }
  }
  const EndChange = (e) => {
    setEndValue(e.target.value);
  }
  const EndBlur = (e) => {
    let newValue = e.target.value;
    if (!isValid(newValue)) {
      setEndValue(today);
    } else {
      setEndValue(newValue);
    }
  }

  return (
    <>
      <S.TermWrap>
        <S.Container>
          <S.Box>
            <S.Title>시작일 설정</S.Title>
            <S.Container>
              <S.InputBox
                type='text'
                value={startValue}
                onKeyPress={handleStart}
                onChange={StartChange}
                onBlur={StartBlur}
              />
            </S.Container>
            <S.CalendarBtn>
              <img src={calender} alt='start_date' />
            </S.CalendarBtn>
          </S.Box>
        </S.Container>
        <S.Container>
          <S.Box>
            <S.Title>종료일 설정</S.Title>
            <S.Container>
              <S.InputBox
                type='text'
                value={endValue}
                onKeyPress={handleEnd}
                onChange={EndChange}
                onBlur={EndBlur}
              />
            </S.Container>
            <S.CalendarBtn>
              <img src={calender} alt='end_date' />
            </S.CalendarBtn>
          </S.Box>
        </S.Container>
      </S.TermWrap>
    </>
  );
}

export default Term;