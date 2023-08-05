import { useState } from 'react';
import { Box, CalendarBtn, Container, InputBox, TermWrap, Title } from './styled';
import calender from '../../../assets/calender.svg';

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
      <TermWrap>
        <Container>
          <Box>
            <Title>시작일 설정</Title>
            <Container>
              <InputBox
                type='text'
                value={startValue}
                onKeyPress={handleStart}
                onChange={StartChange}
                onBlur={StartBlur}
              />
            </Container>
            <CalendarBtn>
              <img src={calender} alt='start_date' />
            </CalendarBtn>
          </Box>
        </Container>
        <Container>
          <Box>
            <Title>종료일 설정</Title>
            <Container>
              <InputBox
                type='text'
                value={endValue}
                onKeyPress={handleEnd}
                onChange={EndChange}
                onBlur={EndBlur}
              />
            </Container>
            <CalendarBtn>
              <img src={calender} alt='end_date' />
            </CalendarBtn>
          </Box>
        </Container>
      </TermWrap>
    </>
  );
}

export default Term;