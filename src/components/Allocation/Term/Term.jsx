import { useState } from 'react';
import { Box, CalendarBtn, Container, InputBox, TermWrap, Title } from './styled';

function Term() {
  const startDate = '2003.01.01';
  const date = new Date;
  const today = `${date.getFullYear()}.${String(date.getMonth() +1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

  const [startValue, setStartValue] = useState(startDate);
  const handleStart = (e) => {
    if (!/[\d.]/.test(e.key)) {
      e.preventDefault();
    }
  }
  const StartChange = (e) => {
    setStartValue(e.target.value);
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
              />
            </Container>
            <CalendarBtn>
              <img src='calender.svg' alt='startDate' />
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
              />
            </Container>
            <CalendarBtn>
              <img src='calender.svg' alt='endDate' />
            </CalendarBtn>
          </Box>
        </Container>
      </TermWrap>
    </>
  );
}

export default Term;