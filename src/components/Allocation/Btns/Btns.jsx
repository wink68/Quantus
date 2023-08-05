import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import * as S from './styled';
import ProgressBar from './ProgressBar';

function Btns() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        if (progress <= 140) {
          setProgress(progress + 20);
          console.log(progress);
        } else {
          clearInterval(interval);
          setIsLoading(false);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading, progress]);

  const handleButtonClick = () => {
    setIsLoading(true);
    setProgress(20);
  };

  return (
    <>
      <S.BtnsWrap>
        <S.FirstCon>
          <S.BtnBox>
            <S.BtnTitle>포트 추출</S.BtnTitle>
          </S.BtnBox>
        </S.FirstCon>
        <S.SecondCon>
          <S.BtnBox onClick={handleButtonClick}>
            {isLoading ? (
              <S.LoadingWrap>
                {progress <= 20 ? (
                  <>
                    <S.Loading>대기중...</S.Loading>
                    <S.LoadingSpinner>
                      <TailSpin
                        width='30'
                        height='30'
                        color='#ec6126'
                        ariaLabel="tail-spin-loading"
                        radius="0"
                        visible={true}
                      />
                    </S.LoadingSpinner>
                  </>
                ) : progress <= 140 ? (
                  <ProgressBar progress={progress} />
                ) : (
                  <>
                    <S.Loading>생성중...</S.Loading>
                    <S.LoadingSpinner>
                      <TailSpin
                        width='30'
                        height='30'
                        color='#ec6126'
                        ariaLabel="tail-spin-loading"
                        radius="0"
                        visible={true}
                      />
                    </S.LoadingSpinner>
                  </>
                )}
              </S.LoadingWrap>
            ) : <S.BtnTitle>백테스트</S.BtnTitle>}
          </S.BtnBox>
        </S.SecondCon>
      </S.BtnsWrap>
    </>
  );
}

export default Btns;